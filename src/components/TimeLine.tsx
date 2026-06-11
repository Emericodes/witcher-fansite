import React from "react";
import "../components/TimeLine.css";

const TimeLine: React.FC = () => {
    return (


<aside className="timeline">
  <h2>Chronologie</h2>
  <ul>
    <li>
      <div className="timeline-content">
        <h3>Banquet de Cintra</h3>
        <p>Geralt invoque la Loi de la Surprise en sauvant l’union de Pavetta et Duny.</p>
      </div>
    </li>
    <li>
      <div className="timeline-content">
        <h3>Chute de Cintra</h3>
        <p>L’empire de Nilfgaard envahit Cintra, Ciri perd sa famille et son royaume.</p>
      </div>
    </li>
    <li>
      <div className="timeline-content">
        <h3>Kaer Morhen</h3>
        <p>Ciri est formée par Geralt et Vesemir, apprenant le combat et la survie.</p>
      </div>
    </li>
    <li>
      <div className="timeline-content">
        <h3>Destin et prophéties</h3>
        <p>Son sang ancien attire rois, mages et empires, annonçant un avenir incertain.</p>
      </div>
    </li>
  </ul>
</aside>
);
};
export default TimeLine;