import React from 'react'

interface YouTubeHomeProps {
  videoId: string
}

const YouTubeHome: React.FC<YouTubeHomeProps> = ({ videoId }) => (
  <div className="relative w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
    <div className="aspect-video">
      <iframe
        className="h-full w-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>
)

export default YouTubeHome
