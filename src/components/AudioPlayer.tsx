import React, { useRef, useState, useEffect } from "react";
import { 
  Play, Pause, SkipForward, SkipBack, 
  Volume2, VolumeX, ListMusic
} from "lucide-react";
import "./AudioPlayer.css";

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

const AudioPlayer = () => {
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
    <section className="player-wrapper" aria-label="Lecteur audio">
      <audio ref={audioRef} src={tracks[currentTrack].src} />

   
      <div className="player-main">
        <div className="track-info">
          <h4 className="track-title">{tracks[currentTrack].title}</h4>
          <span className="track-subtitle">CONTES DU SORCELEUR</span>
        </div>


        <nav className="controls-group" aria-label="Contrôles de lecture">
          <button onClick={previous} aria-label="Piste précédente"><SkipBack size={18} /></button>
          <button onClick={togglePlay} aria-label={isPlaying ? "Pause" : "Lecture"} className="btn-main">
            {isPlaying ? <Pause size={20} fill="#18181b" /> : <Play size={20} fill="#18181b" />}
          </button>
          <button onClick={next} aria-label="Piste suivante"><SkipForward size={18} /></button>
        </nav>

       
        <div className="sliders-row">
          <div className="progress-container">
            <input 
              type="range" aria-label="Progression de la lecture"
              min="0" max={duration || 100} value={progress} 
              onChange={handleProgressChange}
              className="player-slider"
            />
            <div className="time-labels">
              <span>{formatTime(progress)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

         
          <div className="volume-container">
            <button onClick={toggleMute} aria-label={isMuted ? "Activer le son" : "Couper le son"}>
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
            <input 
              type="range" aria-label="Volume" 
              min="0" max="1" step="0.01" 
              value={isMuted ? 0 : volume} 
              onChange={handleVolumeChange} 
              className="player-slider" 
            />
          </div>
        </div>
      </div>

     
      <aside className="player-playlist">
        <div className="playlist-header">
          <ListMusic size={16} /> <span>PLAYLIST</span>
        </div>
        <ol className="track-list">
          {tracks.map((track, idx) => (
            <li key={idx} className={idx === currentTrack ? "active-track" : ""}>
              <button onClick={() => selectTrack(idx)}>
                {idx === currentTrack && isPlaying ? "⚡ " : `${idx + 1}. `}
                {track.title}
              </button>
            </li>
          ))}
        </ol>
      </aside>
    </section>
  );
};

export default AudioPlayer;