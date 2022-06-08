import React, { Component } from 'react';

class Video extends Component {
  render() {
    return (
      <div>
        <video src={this.props.src} controls autostart autoPlay muted />)
      </div>
    );
  }
}
export default Video;
