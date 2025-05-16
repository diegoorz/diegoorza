import React, { useState } from 'react';
import PredictionCard from './PredictionCard';
import { predictions } from '../data/predictions';
import { Filter, Brain, LineChart, Trophy, Baseline as Baseball, FolderRoot as Football, ShoppingBasket as Basketball, Star, TrendingUp, CheckCircle } from 'lucide-react';

const FreePredictions: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('todos');
  const [showAll, setShowAll] = useState(false);
  const [sortBy, setSortBy] = useState<'date' | 'confidence' | 'odds'>('date');
  
  const sportFilters = [
    { id: 'todos', name: '🏆 Todos', icon: Trophy },
    { id: 'beisbol', name: '⚾ Béisbol', icon: Baseball },
    { id: 'futbol', name: '⚽ Fútbol', icon: Football },
    { id: 'nba', name: '🏀 NBA', icon: Basketball },
  ];
  
  const filteredPredictions = predictions
    .filter(prediction => {
      if (activeFilter === 'todos') return true;
      return prediction.category.toLowerCase() === activeFilter;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'confidence':
          return b.confidence === 'alta' ? 1 : -1;
        case 'odds':
          return b.odds - a.odds;
        default:
          return 0;
      }
    });
  
  const displayedPredictions = showAll 
    ? filteredPredictions 
    : filteredPredictions.slice(0, 3);
  
  return (
    <section id="predicciones" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Predicciones Deportivas Profesionales
          </h2>
          <p className="text-xl text-gray-900 max-w-3xl mx-auto">
            Análisis avanzado combinando inteligencia artificial y expertos profesionales para maximizar tu éxito en apuestas deportivas.
          </p>
        </div>

        {/* Analysis Method Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-primary-500">
            <div className="flex items-center mb-4">
              <Brain className="w-8 h-8 text-primary-600 mr-3" />
              <h3 className="text-lg font-semibold text-gray-900">Análisis con IA</h3>
            </div>
            <p className="text-gray-900">
              Utilizamos modelos avanzados de IA para analizar miles de variables y patrones estadísticos.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
            <div className="flex items-center mb-4">
              <LineChart className="w-8 h-8 text-green-600 mr-3" />
              <h3 className="text-lg font-semibold text-gray-900">Análisis Profesional</h3>
            </div>
            <p className="text-gray-900">
              Equipo de analistas expertos con años de experiencia en apuestas deportivas.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-accent-500">
            <div className="flex items-center mb-4">
              <Trophy className="w-8 h-8 text-accent-500 mr-3" />
              <h3 className="text-lg font-semibold text-gray-900">85% de Efectividad</h3>
            </div>
            <p className="text-gray-900">
              Tasa de éxito comprobada en predicciones premium durante los últimos 6 meses.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Sport Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-4 md:mb-0">
            {sportFilters.map(filter => {
              const Icon = filter.icon;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center ${
                    activeFilter === filter.id 
                      ? 'bg-primary-600 text-white shadow-md' 
                      : 'bg-white text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <Icon size={20} className="mr-2" />
                  {filter.name}
                </button>
              );
            })}
          </div>
          
          {/* Sort Options */}
          <div className="flex items-center space-x-2">
            <Filter size={20} className="text-gray-900" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'date' | 'confidence' | 'odds')}
              className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="date">Más recientes</option>
              <option value="confidence">Mayor confianza</option>
              <option value="odds">Mejor cuota</option>
            </select>
          </div>
        </div>
        
        {/* Premium Banner */}
        <div className="mb-12 bg-gradient-to-r from-primary-700 to-primary-900 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <div className="transform rotate-12 translate-x-1/4 -translate-y-1/4">
              <Star className="w-full h-full" />
            </div>
          </div>
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <div className="flex items-center mb-4">
                  <Star className="w-8 h-8 text-yellow-400 mr-3" />
                  <h3 className="text-2xl md:text-3xl font-bold text-red-500">¡Potencia tus Ganancias con Premium!</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center bg-primary-600/30 rounded-lg p-3">
                    <CheckCircle className="text-green-400 mr-3 flex-shrink-0" />
                    <p className="font-medium text-green-400">Acceso a predicciones VIP con 85% de efectividad</p>
                  </div>
                  <div className="flex items-center bg-primary-600/30 rounded-lg p-3">
                    <TrendingUp className="text-green-400 mr-3 flex-shrink-0" />
                    <p className="font-medium text-green-400">Análisis detallado con IA y estadísticas avanzadas</p>
                  </div>
                  <div className="flex items-center bg-primary-600/30 rounded-lg p-3">
                    <Brain className="text-green-400 mr-3 flex-shrink-0" />
                    <p className="font-medium text-green-400">Recomendaciones personalizadas de nuestros expertos</p>
                  </div>
                </div>
              </div>
              <div className="text-center md:text-right bg-primary-800/50 p-6 rounded-xl">
                <div className="mb-4">
                  <p className="text-lg text-white font-medium">Desde solo</p>
                  <div className="flex items-center justify-center md:justify-end">
                    <span className="text-4xl font-bold text-white">MX$199</span>
                    <span className="text-xl ml-2 text-white">/mes</span>
                  </div>
                </div>
                <a 
                  href="#membresia" 
                  className="inline-block bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Obtener Premium Ahora
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Predictions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPredictions.map(prediction => (
            <PredictionCard key={prediction.id} prediction={prediction} />
          ))}
        </div>
        
        {/* Show More Button */}
        {filteredPredictions.length > 3 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white transition-colors duration-300 py-2.5 px-6 rounded-full font-medium"
            >
              {showAll ? 'Mostrar menos' : 'Cargar más predicciones'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FreePredictions;