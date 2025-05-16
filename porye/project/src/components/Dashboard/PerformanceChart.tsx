import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Ene', ganancias: 10000, aciertos: 82 },
  { name: 'Feb', ganancias: 20000, aciertos: 84 },
  { name: 'Mar', ganancias: 35000, aciertos: 83 },
  { name: 'Abr', ganancias: 52000, aciertos: 85 },
  { name: 'May', ganancias: 70000, aciertos: 86 },
  { name: 'Jun', ganancias: 86000, aciertos: 85 },
];

const PerformanceChart: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-bold text-gray-800 mb-6">Evolución de Rendimiento</h3>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip formatter={(value, name) => {
              if (name === "Ganancias (MXN)") {
                return [`MX$${value.toLocaleString()}`, name];
              }
              return [value, name];
            }}/>
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="ganancias"
              stroke="#2563eb"
              strokeWidth={2}
              dot={{ r: 4 }}
              name="Ganancias (MXN)"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="aciertos"
              stroke="#16a34a"
              strokeWidth={2}
              dot={{ r: 4 }}
              name="% Aciertos"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PerformanceChart;