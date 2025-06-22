import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, i }) => {
  console.log(song);
  const imageUrl = song.attributes?.artwork?.url
    ?.replace('{w}', '250')
    ?.replace('{h}', '250');
  const activeSong = "Test";

  return ( 
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-1 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-5 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'} `} >

          <PlayPause />

        </div>
        <img alt="song_img" src={imageUrl || song.images?.coverart} />
      </div>

      <div className="mt-4 flex flex-col">
        <p className='font-semibold text-lg text-white'>
          <Link >
            {song.attributes?.albumName || 'Unknown Title'}
          </Link>
        </p>

        <p className='text-sm text-gray-300 mt-1'>
          <Link>
            {song.attributes?.subtitle || song.attributes?.artistName || 'Unknown Artist'}
          </Link>
        </p>
      </div>

    </div>
  );
};

export default SongCard;
