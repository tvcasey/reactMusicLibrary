import React from 'react';
import axios from 'axios';
import './App.css';


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


  render (){
    if(this.state.loading === true){
      return<div>loading...</div>
    }
    
    return(
    <div className="Display">
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
      {this.state.music.title}
         
          {console.log(this.state.music)}
          <h1>{this.state.music[0].title}</h1>
  
      </table>
    </div>);
  
  }
}

export default App;
