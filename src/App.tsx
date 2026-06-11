// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import Discover from "./pages/Discover";
import World from "./pages/World";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/world" element={<World />} />
        {/* Route par défaut si la page n'existe pas */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
