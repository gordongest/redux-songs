import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
  const { song } = props;
  return song ? (
    <div>
      <h3>Details</h3>
      <p>
        Artist: <b>{song.artist}</b>
      </p>
      <p>Duration: {song.duration}</p>
      <p>Year: {song.year}</p>
    </div>
  ) : (
    <div>
      <h2>Select a song!</h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    song: state.selectedSong,
  };
};

export default connect(mapStateToProps)(SongDetail);
