import React from 'react';
import axios from 'axios';
import './App.css';
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
      </table>
    </div>);
  
  }
}

export default App;

class Sound extends React.Component {
  constructor() {
    super();
    this.state = {
        search: ''
    };
  }
    updateSearch(event) {
      this.setState({search: event.target.value});
    }


    render() {
      let filteredInfo = this.props.music.filter(
        (title) => {
          return music.title.indexOf(this.state.search) !== -1;
        }
      )
      return (
        <div>
          <ul>
            {filteredInfo.map((music) => {
              return <Sound music ={music}
                  key={music.id}/>
            })}

          </ul>
          <input type="text"
            value={this.state.search}
            onChange={this.updateSeach.bind(this)}/>
        </div>
      )

  }
}
export default Sound;

function navigationSection() {
  return (
    <section className="navbar">
      <a href="music/" className="item">Home</a>
      <a href="title" className="item">Title</a>
      <a href="artist" className="item">Artist</a>
      <a href="album" className="item">Album</a>
      <a href="genre" className="item">Genre</a>
      <a href="releaseDate" className="item">Release Date</a>
    </section>
      )
  }