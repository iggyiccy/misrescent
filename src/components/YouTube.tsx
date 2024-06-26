import React from 'react'

interface YouTubePlayerProps {
  videoId: string
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId }) => (
  <iframe
    width="560"
    height="375"
    className="relative -left-4 h-[384px] w-screen sm:left-0 sm:h-[384px] sm:w-[480px]"
    src={`https://www.youtube.com/embed/${videoId}`}
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
)

export default YouTubePlayer
