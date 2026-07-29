import React from 'react';
import type { Statistic } from '../../types/statistic';
import './Stats.css';

interface StatCardProps {
  statistic: Statistic;
}

const StatCard: React.FC<StatCardProps> = ({ statistic }) => {
  return (
    <div className="stat-card">
      <div className="stat-icon">
        <i>{statistic.icon}</i>
      </div>
      <div className="stat-value">{statistic.value}</div>
      <div className="stat-title">{statistic.title}</div>
    </div>
  );
};

export default StatCard;
