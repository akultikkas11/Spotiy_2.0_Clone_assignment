// /* eslint-disable jsx-a11y/media-has-caption */
// import React, { useRef, useEffect } from 'react';

// const Player = ({ activeSong, isPlaying, volume, seekTime, onEnded, onTimeUpdate, onLoadedData, repeat }) => {
//   const ref = useRef(null);
//   // eslint-disable-next-line no-unused-expressions
//   // if (ref.current) {
//   //   if (isPlaying) {
//   //     ref.current.play();
//   //   } else {
//   //     ref.current.pause();
//   //   }
//   // }

//   useEffect(() => {
//   if (ref.current) {
//     if (isPlaying) {
//       ref.current.play().catch((e) => {
//         console.warn("Autoplay blocked:", e);
//       });
//     } else {
//       ref.current.pause();
//     }
//   }
// }, [isPlaying, activeSong]);

//   useEffect(() => {
//     ref.current.volume = volume;
//   }, [volume]);
//   // updates audio element only on seekTime change (and not on each rerender):
//   useEffect(() => {
//     ref.current.currentTime = seekTime;
//   }, [seekTime]);

//   return (
//     <audio
//       src={activeSong?.attributes?.previews?.[0].url}
//       ref={ref}
//       loop={repeat}
//       onEnded={onEnded}
//       onTimeUpdate={onTimeUpdate}
//       onLoadedData={onLoadedData}
//     />
//   );
// };

// export default Player;

/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect } from 'react';

const Player = ({
  activeSong,
  isPlaying,
  volume,
  seekTime,
  onEnded,
  onTimeUpdate,
  onLoadedData,
  repeat,
}) => {
  const ref = useRef(null);

  const audioSrc = activeSong?.attributes?.previews?.[0]?.url;

  // Play/pause handling with autoplay-safe logic
  useEffect(() => {
    if (!ref.current) return;

    if (isPlaying) {
      ref.current
        .play()
        .catch((e) => console.warn('Autoplay blocked or error:', e));
    } else {
      ref.current.pause();
    }
  }, [isPlaying, audioSrc]);

  // Set volume
  useEffect(() => {
    if (ref.current) ref.current.volume = volume;
  }, [volume]);

  // Seek to position
  useEffect(() => {
    if (ref.current) ref.current.currentTime = seekTime;
  }, [seekTime]);

  // Prevent rendering without a valid audio source
  if (!audioSrc) return null;

  return (
    <audio
      src={audioSrc}
      ref={ref}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  );
};

export default Player;
  