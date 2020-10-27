import React from 'react';
import axios from 'axios';
import './App.css';
import Sound from './sound.js';

// import Sound from './App.css';

class App extends React.Component {
  state={
    music: [],
    loading: true
  }

  componentDidMount() {
    axios.get(`http://www.devcodecampmusiclibrary.com/api/music`)
      .then(res => {
        const music = res.data;
        this.setState({ music,
        loading: false });
      })
  }

  filterMusic(word) {
    
    // let beat = this.state.music.filter(
    let result = this.state.music.filter(
        title => this.state.music.title.indexOf(word));
          
    console.log(result);
    return result;
    // return beat;
    // let result = someArray.filter(item => item.name.includes(someString))
    // Filter this.state.music 
    // Review filter function
    // Once your music data has been filtered properly
    // Update the state of the state music variable
        }
  

  render (){
    if(this.state.loading === true){
      return<div>loading...</div>
    }
    
    return(
    <div className="Display">
      <Sound filterMusic = {this.filterMusic}/>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Album</th>
            <th>Artist</th>
            <th>Genre</th>
            <th>Release Date</th>
          </tr>
          {this.state.music.map(music =>
          <tr>
                <td>{music.title}</td>
                <td>{music.album}</td>
                <td>{music.artist}</td>
                <td>{music.genre}</td>
                <td>{music.releaseDate}</td>
          </tr>

            )}
          </thead>
      </table>
    </div>);
  
  }
}

export default App;

 