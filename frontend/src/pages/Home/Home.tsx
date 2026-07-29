import React, { useEffect, useState } from 'react';
import HeroComponent from '../../components/Hero/Hero';
import type { Hero } from '../../types/hero';
import { getHero } from '../../services/heroService';
import Navbar from '../../components/Navbar/Navbar';
import StatsSection from '../../components/Stats/StatsSection';

const Home: React.FC = () => {
  const [hero, setHero] = useState<Hero | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const data = await getHero();
        setHero(data);
      } catch (err) {
        setError('Failed to load hero content.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchHero();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <main>
      <Navbar />
      {hero ? <HeroComponent hero={hero} /> : null}
      <StatsSection />
    </main>
  );
};

export default Home;
