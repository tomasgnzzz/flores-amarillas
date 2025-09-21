import React from 'react';
import './App.css';
import Flowers from './components/Flowers';
import Letter from './components/Letter';

function App() {
  return (
    <div className="app-container">
      <Flowers />
      <Letter />
    </div>
  );
}

export default App;
