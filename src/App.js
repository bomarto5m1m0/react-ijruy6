import React from 'react';
import './style.css';
import Menu from './components/Menu';
import Video from './components/Video';

const VIDEOS = {
  fast: 'https://content.codecademy.com/courses/React/react_video-fast.mp4',
  slow: 'https://content.codecademy.com/courses/React/react_video-slow.mp4',
  cute: 'https://content.codecademy.com/courses/React/react_video-cute.mp4',
  eek: 'https://content.codecademy.com/courses/React/react_video-eek.mp4',
};

class App extends React.Component {
  constructor(props) {
    super(props);  
    this.state = { src: VIDEOS.slow };
    this.changeVideo = this.changeVideo.bind(this)
  }

   changeVideo =(newVideo)=> {
    this.setState({
      src: VIDEOS[newVideo],
    });
  }

  render() {
    return (
      <div>
        <h1>Video Player!</h1>
        <Menu changeVideo={this.changeVideo} />
        <Video src={this.state.src} />
        <p>Start editing to see some magic happen :)</p>
      </div>
    );
  }
}

export default App;
