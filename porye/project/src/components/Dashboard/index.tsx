import React from 'react';
import PerformanceStats from './PerformanceStats';
import PerformanceChart from './PerformanceChart';

const Dashboard: React.FC = () => {
  return (
    <div className="py-8 space-y-8 bg-gray-50 rounded-xl mt-8 p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Estadísticas de Rendimiento</h2>
        <p className="text-gray-600">Monitorea tu rendimiento y estadísticas en tiempo real</p>
      </div>
      
      <PerformanceStats />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PerformanceChart />
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Resumen de Predicciones</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-900 font-medium">Predicciones Totales</span>
              <span className="text-primary-600 font-bold">156</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-900 font-medium">Predicciones Acertadas</span>
              <span className="text-green-600 font-bold">124</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-900 font-medium">Predicciones Falladas</span>
              <span className="text-red-600 font-bold">32</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;