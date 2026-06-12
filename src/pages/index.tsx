import { useNavigate } from "react-router-dom";
import "./IndexPage.css"; 
import RainEffect from "../components/RainEffect";
import ThunderEffect from "../components/ThunderEffect";
import AudioPlayer from "../components/AudioPlayer"; 

const Index = () => {
  const navigate = useNavigate();

  return (
    <main className="witcher-screen-container">
      <div className="witcher-fx-layer" aria-hidden="true">
        <ThunderEffect />
        <RainEffect />
      </div>

     
      <div className="witcher-middle-layout">
        <header className="witcher-text-group">
          <h1 className="witcher-main-title">THE WITCHER</h1>
          <p className="witcher-sub-title">Bienvenue dans l'univers du Sorceleur</p>
        </header>
      </div>

      
      <div className="witcher-action-group">
        <button 
          className="witcher-cta-btn" 
          onClick={() => navigate("/discover")}
          aria-label="Découvrir l'univers du Sorceleur"
        >
          Découvrir
        </button>
      </div>

    
      <footer className="witcher-bottom-layout">
        <AudioPlayer />
      </footer>
    </main>
  );
};

export default Index;
