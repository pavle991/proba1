import React from 'react';
import { useSwipeable } from 'react-swipeable';
import { Player } from '@livepeer/react';
import './App.css';

const videos = [
  { id: 1, src: 'https://livepeer.studio/api/.../index.m3u8' },
  { id: 2, src: 'https://livepeer.studio/api/.../index.m3u8' }
];

export default function App() {
  const [idx, setIdx] = React.useState(0);
  const handlers = useSwipeable({
    onSwipedUp: () => setIdx((i) => Math.min(i + 1, videos.length - 1)),
    onSwipedDown: () => setIdx((i) => Math.max(i - 1, 0)),
    trackTouch: true
  });

  return (
    <div {...handlers} className="h-screen w-screen bg-black flex items-center justify-center">
      <Player
        title="Video"
        src={videos[idx].src}
        autoPlay
        muted
        loop
        aspectRatio="9to16"
      />
    </div>
  );
}
