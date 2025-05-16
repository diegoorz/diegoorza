import React from 'react';
import { Check } from 'lucide-react';
import { memberships } from '../data/memberships';

const MembershipSection: React.FC = () => {
  return (
    <section id="membresia" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Planes de Membresía
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades y comienza a ganar con nuestras predicciones premium.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {memberships.map((plan) => (
            <div 
              key={plan.id}
              className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl ${
                plan.isPopular 
                  ? 'border-4 border-blue-800 shadow-lg transform scale-105 md:scale-110' 
                  : 'border border-gray-200 shadow-md'
              }`}
            >
              {plan.isPopular && (
                <div className="bg-blue-800 text-white py-2 text-center font-medium">
                  Más Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-end mb-6">
                  <span className="text-4xl font-bold text-blue-800">MX${plan.price.toFixed(2)}</span>
                  <span className="text-gray-500 ml-1">/{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 rounded-xl font-bold transition-colors duration-300 ${
                    plan.isPopular 
                      ? 'bg-blue-800 hover:bg-blue-900 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-blue-800'
                  }`}
                >
                  Seleccionar Plan
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
            Preguntas Frecuentes
          </h3>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                ¿Puedo cancelar mi suscripción en cualquier momento?
              </h4>
              <p className="text-gray-700">
                Sí, puedes cancelar tu suscripción en cualquier momento desde tu perfil. Si cancelas, mantendrás el acceso hasta el final del período facturado.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                ¿Qué métodos de pago aceptan?
              </h4>
              <p className="text-gray-700">
                Aceptamos todas las tarjetas de crédito/débito principales, PayPal y transferencia bancaria para pagos anuales.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                ¿Ofrecen garantía de devolución?
              </h4>
              <p className="text-gray-700">
                Sí, ofrecemos una garantía de devolución de 7 días. Si no estás satisfecho con nuestro servicio, puedes solicitar un reembolso completo.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                ¿Cómo recibo las predicciones premium?
              </h4>
              <p className="text-gray-700">
                Las predicciones premium están disponibles inmediatamente en tu cuenta después de suscribirte. También recibirás notificaciones por email con las mejores selecciones del día.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;