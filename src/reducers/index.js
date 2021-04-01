import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Any Way You Want It', artist: 'Journey', duration: '3:22' },
    { title: "Let's Dance", artist: 'David Bowie', duration: '4:09' },
    { title: 'Bad', artist: 'Michael Jackson', duration: '4:18' },
    { title: 'Hungry Like The Wolf', artist: 'Duran Duran', duration: '3:42' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECT') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
