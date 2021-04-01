import React from 'react';
import SongList from './SongList';

const App = (props) => (
  <div>
    {console.log(props)}
    <SongList />
  </div>
);

export default App;
