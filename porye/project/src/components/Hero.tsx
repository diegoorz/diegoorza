import React from 'react';
import { TrendingUp, Award, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="pt-32 pb-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Predicciones Deportivas <span className="text-red-500">Profesionales</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Maximiza tus probabilidades de ganar con nuestros análisis expertos y pronósticos precisos para todos los deportes principales.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#predicciones" 
                className="bg-white text-blue-800 hover:bg-gray-100 py-3 px-8 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Ver Predicciones Gratis
              </a>
              <a 
                href="#membresia" 
                className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Acceder a Premium
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 bg-white/10 rounded-full absolute animate-pulse"></div>
              <img 
                src="https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Predicciones deportivas" 
                className="w-full max-w-md rounded-lg shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <TrendingUp size={32} className="text-red-500 mr-4" />
              <h3 className="text-xl font-bold">Tasa de Éxito 78%</h3>
            </div>
            <p className="text-blue-100">
              Nuestros expertos mantienen una tasa de acierto superior al 78% en los últimos 3 meses.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <Award size={32} className="text-red-500 mr-4" />
              <h3 className="text-xl font-bold">Análisis Profesional</h3>
            </div>
            <p className="text-blue-100">
              Cada predicción es respaldada por un análisis estadístico completo y opiniones de expertos.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <Clock size={32} className="text-red-500 mr-4" />
              <h3 className="text-xl font-bold">Actualizado Diariamente</h3>
            </div>
            <p className="text-blue-100">
              Nuevas predicciones todos los días para todos los eventos deportivos importantes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;