import React from 'react';
import type { Hero as HeroType } from '../../types/hero';
import './Hero.css';

interface HeroProps {
  hero: HeroType;
}

const Hero: React.FC<HeroProps> = ({ hero }) => {
  const renderTitle = (title: string) => {
    if (!title) return null;
    const parts = title.split(/(CLEANING)/i);
    return (
      <>
        {parts.map((part, index) => 
          part.toUpperCase() === 'CLEANING' ? (
            <span key={index} className="highlight">{part}</span>
          ) : (
            part
          )
        )}
      </>
    );
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-badge">{renderTitle(hero.title)}</span>
        <h1 className="hero-title">{renderTitle(hero.title)}</h1>
        {hero.subtitle && <h2 className="hero-subtitle">{hero.subtitle}</h2>}
        <p className="hero-description">{hero.description}</p>
        <a href={hero.button_link || "#"} className="hero-button">
          SHOP NOW
        </a>
      </div>
      <div className="hero-image-container">
        {hero.image ? (
          <img src={hero.image} alt={hero.title} className="hero-image" />
        ) : (
          <div className="hero-image-placeholder">No Image Available</div>
        )}
      </div>
    </section>
  );
};

export default Hero;
