import React, { useRef, useEffect } from 'react';
import './VideoCard.css';
import type { Video } from '../../types/video';

interface VideoCardProps {
  video: Video;
  isActive: boolean;
  onPlay: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, isActive, onPlay }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // If this video is no longer active, pause it
    if (!isActive && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isActive]);

  return (
    <div className="video-card">
      <div className="video-thumbnail-container">
        {video.video_file ? (
          <video
            ref={videoRef}
            src={video.video_file}
            className="video-element"
            preload="metadata"
            controls
            onPlay={onPlay}
          />
        ) : (
          <div className="video-thumbnail-placeholder">No Video</div>
        )}
      </div>
    </div>
  );
};

export default VideoCard;
