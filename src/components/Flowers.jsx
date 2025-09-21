import React from 'react'; 
import './Flowers.css';
import floresAmarillas from "../components/floresAmarillas.png";

const Flowers = () => {
  return (
    <div className="flowers-container">
      <img src={floresAmarillas} alt="Flores Amarillas" className="flower" />
      <div className="floating-hearts">
        <span>❤️</span>
        <span>💛</span>
        <span>❤️</span>
      </div>
    </div>
  );
};

export default Flowers;
