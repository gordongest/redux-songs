import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
  mapList(songs) {
    return songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              select
            </button>
          </div>
          <div className="content">
            <p>{song.title}</p>
          </div>
        </div>
      );
    });
  }

  render() {
    const { songs } = this.props;
    return <div className="ui divided list">{this.mapList(songs)}</div>;
  }
}

/* take the data held in the store ("state") and map it to a props object */
const mapStateToProps = (state) => {
  return {
    songs: state.songs,
  };
};

/* connect returns a function, so in order to pass state through to the component it is
required to pass the SongList component as the second function call argument to connect */
/* to get the action creator wired in, pass it as a second argument to the first call */
export default connect(mapStateToProps, { selectSong })(SongList);
