import React from 'react';
import Header from '../components/Header';
import FreePredictions from '../components/FreePredictions';
import Dashboard from '../components/Dashboard';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 pt-20">
        <FreePredictions />
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
};

export default Home;