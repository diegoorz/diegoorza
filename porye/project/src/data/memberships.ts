import { Membership } from '../types';

export const memberships: Membership[] = [
  {
    id: 'basic',
    name: 'Básico',
    price: 199.99,
    period: 'mes',
    features: [
      'Acceso a predicciones premium',
      'Análisis básicos',
      'Soporte por email',
    ],
  },
  {
    id: 'pro',
    name: 'Profesional',
    price: 399.99,
    period: 'mes',
    features: [
      'Todas las predicciones premium',
      'Análisis detallados',
      'Estadísticas avanzadas',
      'Soporte prioritario',
      'Acceso a comunidad VIP',
    ],
    isPopular: true,
  },
  {
    id: 'elite',
    name: 'Élite',
    price: 799.99,
    period: 'mes',
    features: [
      'Todas las predicciones premium',
      'Análisis exclusivos de expertos',
      'Estadísticas avanzadas',
      'Soporte 24/7',
      'Comunidad VIP con expertos',
      'Consejos personalizados',
      'Garantía de devolución',
    ],
  },
];