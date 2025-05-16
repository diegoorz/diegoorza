import React from 'react';
import { LockKeyhole, Percent, TrendingUp, MessageCircle, Heart, Users, AlertTriangle, CheckCircle, XCircle, Star, Crown } from 'lucide-react';
import { Prediction } from '../types';

interface PredictionCardProps {
  prediction: Prediction;
}

const PredictionCard: React.FC<PredictionCardProps> = ({ prediction }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'acertada':
        return 'bg-green-600 text-white';
      case 'fallada':
        return 'bg-red-600 text-white';
      default:
        return 'bg-yellow-600 text-white';
    }
  };

  const getConfidenceColor = (confidence: string) => {
    switch (confidence) {
      case 'alta':
        return 'bg-green-600';
      case 'media':
        return 'bg-yellow-600';
      default:
        return 'bg-red-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'acertada':
        return <CheckCircle size={16} className="mr-1" />;
      case 'fallada':
        return <XCircle size={16} className="mr-1" />;
      default:
        return <AlertTriangle size={16} className="mr-1" />;
    }
  };

  const premiumSubscribers = prediction.isPremium ? Math.floor(Math.random() * (350 - 120 + 1) + 120) : 0;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 group relative">
      {prediction.isPremium && (
        <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-primary-600 to-primary-700 text-white py-1.5 px-4 rounded-full flex items-center text-sm font-medium shadow-lg">
          <Star size={14} className="mr-1.5 text-yellow-400" />
          Premium
        </div>
      )}
      
      <div className="relative h-48 overflow-hidden">
        <img 
          src={prediction.image} 
          alt={prediction.match} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4 text-white">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium bg-accent-500 px-2 py-0.5 rounded shadow-sm">
              {prediction.sport} - {prediction.league}
            </span>
            <span className={`text-sm font-medium px-2 py-0.5 rounded flex items-center shadow-sm ${getStatusColor(prediction.status)}`}>
              {getStatusIcon(prediction.status)}
              {prediction.status.charAt(0).toUpperCase() + prediction.status.slice(1)}
            </span>
          </div>
          <h3 className="text-lg font-bold text-white">{prediction.teams.home} vs {prediction.teams.away}</h3>
          <div className="flex justify-between items-center mt-1">
            <span className="text-sm text-white/90">{prediction.date} • {prediction.time}</span>
            <div className={`flex items-center px-2 py-0.5 rounded text-sm text-white shadow-sm ${getConfidenceColor(prediction.confidence)}`}>
              <Percent size={14} className="mr-1" />
              Confianza {prediction.confidence}
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-bold text-gray-900">Predicción:</h4>
          <div className="flex items-center text-primary-600 font-medium">
            <TrendingUp size={16} className="mr-1" />
            <span>{prediction.bookmaker} {prediction.odds.toFixed(2)}</span>
          </div>
        </div>
        
        {prediction.isPremium ? (
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-6 rounded-lg flex flex-col items-center text-center">
            <div className="bg-primary-600 rounded-full p-3 mb-3">
              <Crown size={24} className="text-yellow-400" />
            </div>
            <h5 className="text-primary-900 font-semibold mb-2">Predicción Premium</h5>
            <p className="text-primary-700 text-sm mb-2">
              {premiumSubscribers} usuarios ya han desbloqueado esta predicción
            </p>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
              <div className="bg-primary-600 h-1.5 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <a 
              href="#membresia" 
              className="bg-primary-600 text-white text-sm py-2 px-6 rounded-full hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg w-full"
            >
              Ver Predicción Premium
            </a>
          </div>
        ) : (
          <>
            <div className="bg-gray-100 p-3 rounded-lg mb-3">
              <p className="font-medium text-gray-900">{prediction.prediction}</p>
              {prediction.analysis && (
                <p className="text-gray-700 mt-2 text-sm">{prediction.analysis}</p>
              )}
            </div>
            <div className="flex items-center justify-between text-gray-600 text-sm">
              <div className="flex space-x-4">
                <button className="flex items-center hover:text-accent-500 transition-colors">
                  <Heart size={16} className="mr-1" />
                  <span>{prediction.likes}</span>
                </button>
                <button className="flex items-center hover:text-primary-500 transition-colors">
                  <MessageCircle size={16} className="mr-1" />
                  <span>{prediction.comments}</span>
                </button>
                <button className="flex items-center hover:text-green-500 transition-colors">
                  <Users size={16} className="mr-1" />
                  <span>{prediction.followers}</span>
                </button>
              </div>
              <span>{new Date(prediction.createdAt).toLocaleDateString()}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PredictionCard;