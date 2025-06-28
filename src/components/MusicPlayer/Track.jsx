import React from 'react';

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="flex-1 flex items-center justify-start">
    <div className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''} hidden sm:block h-16 w-16 mr-4`}>
      {/* <img src={activeSong?.images?.coverart} alt="cover art" className="rounded-full" /> */}
      <img src={activeSong?.attributes?.artwork?.url.replace('{w}', '125').replace('{h}', '125')} />
    </div>
    <div className="w-[50%]">
      <p className="truncate text-white font-bold text-lg">
        {/* {activeSong?.title ? activeSong?.title : 'No active Song'} */}
        {activeSong?.attributes?.name || 'No active Song'}
      </p>
      <p className="truncate text-gray-300">
        {/* {activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'} */}
        {activeSong?.attributes?.artistName || 'No active Song'}
      </p>
    </div>
  </div>
);

export default Track;
