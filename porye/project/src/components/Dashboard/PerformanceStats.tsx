import React from 'react';
import { TrendingUp, TrendingDown, Percent, DollarSign, Calendar, Target } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  color: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon, trend, color }) => (
  <div className={`bg-white rounded-xl p-6 shadow-md border-l-4 ${color}`}>
    <div className="flex justify-between items-start">
      <div>
        <p className="text-gray-500 text-sm mb-1">{title}</p>
        <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
        {trend && (
          <p className={`flex items-center text-sm mt-2 ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {trend.isPositive ? <TrendingUp size={16} className="mr-1" /> : <TrendingDown size={16} className="mr-1" />}
            {trend.value}% vs mes anterior
          </p>
        )}
      </div>
      <div className={`p-3 rounded-full ${color.replace('border', 'bg').replace('-500', '-100')}`}>
        {icon}
      </div>
    </div>
  </div>
);

const PerformanceStats: React.FC = () => {
  const stats = [
    {
      title: 'Porcentaje de Aciertos',
      value: '85%',
      icon: <Percent size={24} className="text-green-600" />,
      trend: { value: 8.5, isPositive: true },
      color: 'border-green-500'
    },
    {
      title: 'Beneficio Total',
      value: 'MX$86,000',
      icon: <DollarSign size={24} className="text-blue-600" />,
      trend: { value: 16.2, isPositive: true },
      color: 'border-blue-500'
    },
    {
      title: 'Predicciones Este Mes',
      value: '124',
      icon: <Calendar size={24} className="text-purple-600" />,
      trend: { value: 12.4, isPositive: true },
      color: 'border-purple-500'
    },
    {
      title: 'Racha Actual',
      value: '12',
      icon: <Target size={24} className="text-red-600" />,
      trend: { value: 4, isPositive: true },
      color: 'border-red-500'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default PerformanceStats;