import React, { useEffect } from 'react';
import Home from './pages/Home';

function App() {
  useEffect(() => {
    document.title = 'PronosticosPro - Predicciones Deportivas';
  }, []);

  return (
    <div className="min-h-screen bg-primary-50">
      <Home />
    </div>
  );
}

export default App;