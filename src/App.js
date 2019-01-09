import React, { Component } from 'react';
import './App.css';

import SearchBar from "./components/searchBar"
import VideoList from "./components/videoList"
import VideoPlayer from "./components/videoPlayer"

class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchBar />
        <VideoList />
        <VideoPlayer />
      </div>
    );
  }
}

export default App;
