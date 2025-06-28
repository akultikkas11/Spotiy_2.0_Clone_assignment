import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, isPlaying, activeSong, i, data}) => {
  // const activeSong = 'Test';
  console.log(song);
  const dispatch = useDispatch();

  const handlePauseClick = ()=>{
    dispatch(playPause(false));
  }

  const handlePlayClick = ()=>{
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  }

  const imageUrl = song.attributes?.artwork?.url
    ?.replace('{w}', '250')
    ?.replace('{h}', '250');

  return (
    <div className='flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer'>
      <div className='relative w-full h-56 group'>
        {/* <div className={`absolute inset-0 justify-center bg-black bg-opacity-50 items-center ${activeSong?.title===song.title ? 'flex' : 'hidden group-hover:flex'}`}> */}
        <div className={`absolute inset-0 justify-center bg-black bg-opacity-50 items-center ${activeSong?.attributes?.name === song?.attributes?.name ? 'flex' : 'hidden group-hover:flex'}`}>
          <PlayPause 
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
          />
        </div>
        <img alt="song_img" src={imageUrl ||song.images?.coverart} />
      </div>

      <div className="mt-4 flex flex-col">
        <p className='font-semibold text-md text-white'>
          <Link to={`/songs/${song?.key}`}>
            {song.attributes?.albumName || 'Unknown Title'}
          </Link>
        </p>

        <p className='text-sm text-gray-300 mt-1'>
          {/* <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid} : '/top-artists'`}> */}
          <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>
            {song.attributes?.subtitle || song.attributes?.artistName || 'Unknown Artist'}
          </Link>
        </p>
      </div>

    </div>
  );
}

export default SongCard;
