import React, { useEffect, useState, useRef } from 'react';
import { getVideos } from '../../services/videoService';
import type { Video } from '../../types/video';
import VideoCard from '../VideoCard/VideoCard';
import './VideoGallery.css';

const VideoGallery: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('All');
  
  const [activeVideoId, setActiveVideoId] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await getVideos();
        setVideos(data);
      } catch (err) {
        setError('Failed to load videos.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      // Math.ceil handles sub-pixel rendering discrepancies
      setShowRightArrow(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    // Check arrow visibility when videos are loaded or language filter changes
    handleScroll();
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, [videos, selectedLanguage]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      // Scroll by approximately one card width plus gap
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const languages = ['All', ...Array.from(new Set(videos.map(v => v.language)))];

  const filteredVideos = selectedLanguage === 'All' 
    ? videos 
    : videos.filter(video => video.language === selectedLanguage);

  if (loading) {
    return <div className="video-gallery-loading">Loading videos...</div>;
  }

  if (error) {
    return <div className="video-gallery-error">{error}</div>;
  }

  if (videos.length === 0) {
    return null;
  }

  return (
    <section className="video-gallery-section">
      <div className="video-gallery-container">
        <h2 className="video-gallery-title">Video Gallery</h2>
        
        <div className="video-language-tabs">
          {languages.map(language => (
            <button
              key={language}
              className={`language-tab ${selectedLanguage === language ? 'active' : ''}`}
              onClick={() => setSelectedLanguage(language)}
            >
              {language}
            </button>
          ))}
        </div>

        <div className="video-row-wrapper">
          {showLeftArrow && (
            <button 
              className="scroll-arrow left" 
              onClick={() => scroll('left')}
              aria-label="Scroll left"
            >
              &lt;
            </button>
          )}

          <div 
            className="video-row" 
            ref={scrollContainerRef}
            onScroll={handleScroll}
          >
            {filteredVideos.map(video => (
              <VideoCard 
                key={video.id} 
                video={video} 
                isActive={activeVideoId === video.id}
                onPlay={() => setActiveVideoId(video.id)}
              />
            ))}
          </div>

          {showRightArrow && (
            <button 
              className="scroll-arrow right" 
              onClick={() => scroll('right')}
              aria-label="Scroll right"
            >
              &gt;
            </button>
          )}
        </div>
        
        {filteredVideos.length === 0 && (
          <div className="no-videos-message">No videos available in this language.</div>
        )}
      </div>
    </section>
  );
};

export default VideoGallery;
