import React, { useRef, useState, useEffect } from "react";
import { 
  Play, Pause, SkipForward, SkipBack, 
  Volume2, VolumeX, ListMusic
} from "lucide-react";

import track1 from "../assets/song/Berceuse du Sorceleur Au bois du sommeil.mp3";
import track2 from "../assets/song/Donne lui un sou.mp3";
import track3 from "../assets/song/J'ai appris, que tu es en vie woman.mp3";
import track4 from "../assets/song/À la cendre, à la chair (inspiré de Yennefer & Geralt).mp3";
import track5 from "../assets/song/Que la nuit vienne.mp3";

const tracks = [
  { title: "Berceuse du sorceleur", src: track1 },
  { title: "Donne un sous au sorceleur", src: track2 },
  { title: "J'ai appris, que tu es en vie BRULE", src: track3 },
  { title: "À la cendre, à la chair (inspiré de Yennefer & Geralt)", src: track4 },
  { title: "Que la nuit vienne", src: track5 },
];

const AudioPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch((err) => console.log(err));
      }
    }
  }, [currentTrack]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => console.log(err));
    }
    setIsPlaying(!isPlaying);
  };

  const next = () => setCurrentTrack((prev) => (prev + 1) % tracks.length);
  const previous = () => setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length);

  const selectTrack = (index: number) => {
    setCurrentTrack(index);
    setIsPlaying(true);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) {
      audioRef.current.volume = val;
      audioRef.current.muted = val === 0;
      setIsMuted(val === 0);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = val;
      setProgress(val);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => setProgress(audio.currentTime);
    const handleMetadata = () => setDuration(audio.duration || 0);
    const handleEnded = () => next();

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", handleMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", handleMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div style={{
      display: "flex",
      flexDirection: window.innerWidth < 768 ? "column" : "row",
      backgroundColor: "rgba(10, 10, 12, 0.95)",
      border: "1px solid #27272a",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 10px 30px rgba(0,0,0,0.7)",
      maxWidth: "800px",
      width: "100%",
      margin: "0 auto",
      color: "#e4e4e7"
    }}>
      <audio ref={audioRef} src={tracks[currentTrack].src} />

      {/* Lecteur */}
      <div style={{ flex: 1, padding: "20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ textAlign: "center", marginBottom: "15px" }}>
          <h4 style={{ margin: "5px 0", color: "#f59e0b", fontFamily: "Cinzel, serif", fontSize: "16px" }}>
            {tracks[currentTrack].title}
          </h4>
          <span style={{ fontSize: "11px", color: "#71717a", letterSpacing: "0.1em" }}>CONTES DU SORCELEUR</span>
        </div>

        {/* Barre de temps */}
        <div style={{ width: "100%" }}>
          <input 
            type="range" 
            min="0" 
            max={duration || 100} 
            value={progress} 
            onChange={handleProgressChange}
            style={{ width: "100%", accentColor: "#d97706", cursor: "pointer" }}
          />
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px", color: "#a1a1aa", marginTop: "4px", fontFamily: "monospace" }}>
            <span>{formatTime(progress)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Boutons */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px", margin: "15px 0" }}>
          <button onClick={previous} style={{ background: "none", border: "none", color: "#a1a1aa", cursor: "pointer" }}><SkipBack size={20} /></button>
          <button onClick={togglePlay} style={{ background: "#f4f4f5", border: "none", borderRadius: "50%", padding: "10px", color: "#09090b", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" style={{ marginLeft: "2px" }} />}
          </button>
          <button onClick={next} style={{ background: "none", border: "none", color: "#a1a1aa", cursor: "pointer" }}><SkipForward size={20} /></button>
        </div>

        {/* Mute / Vol */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", width: "150px" }}>
          <button onClick={toggleMute} style={{ background: "none", border: "none", color: "#71717a", cursor: "pointer" }}>
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
          <input 
            type="range" min="0" max="1" step="0.01" 
            value={isMuted ? 0 : volume} onChange={handleVolumeChange}
            style={{ width: "100%", accentColor: "#71717a" }}
          />
        </div>
      </div>

      {/* Playlist intégrée */}
      <div style={{ width: window.innerWidth < 768 ? "100%" : "260px", background: "rgba(5, 5, 6, 0.6)", padding: "20px", borderLeft: window.innerWidth < 768 ? "none" : "1px solid #27272a", borderTop: window.innerWidth < 768 ? "1px solid #27272a" : "none" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", borderBottom: "1px solid #27272a", paddingBottom: "6px" }}>
          <ListMusic size={16} color="#d97706" />
          <span style={{ fontSize: "11px", fontWeight: "bold", textTransform: "uppercase", color: "#a1a1aa" }}>Playlist</span>
        </div>
        <div style={{ maxHeight: "160px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "4px" }}>
          {tracks.map((track, idx) => (
            <button 
              key={idx} 
              onClick={() => selectTrack(idx)}
              style={{
                textAlign: "left", background: idx === currentTrack ? "rgba(217, 119, 6, 0.1)" : "none",
                border: idx === currentTrack ? "1px solid rgba(217, 119, 6, 0.3)" : "1px solid transparent",
                padding: "8px", borderRadius: "4px", color: idx === currentTrack ? "#f59e0b" : "#a1a1aa",
                fontSize: "12px", cursor: "pointer", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"
              }}
            >
              {idx === currentTrack && isPlaying ? "⚡ " : `${idx + 1}. `} {track.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;