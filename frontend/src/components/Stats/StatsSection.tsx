import React, { useEffect, useState } from 'react';
import StatCard from './StatCard';
import { getStatistics } from '../../services/statisticsService';
import type { Statistic } from '../../types/statistic';
import './Stats.css';

const StatsSection: React.FC = () => {
  const [statistics, setStatistics] = useState<Statistic[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getStatistics();
        setStatistics(data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch statistics:", err);
        setError("Failed to load statistics.");
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return null;
  if (error) return null;
  if (statistics.length === 0) return null;

  return (
    <section className="stats-section">
      <div className="stats-container">
        {statistics.map((stat) => (
          <StatCard key={stat.id} statistic={stat} />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
