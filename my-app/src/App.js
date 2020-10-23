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
      <li key={this.state.music.title}>
      {this.state.music.title}
    </li>
        <ul>
         
          {console.log(this.state.music)}
          <h1>{this.state.music[0].title}</h1>
          { this.state.music.map(title => <li>{this.state.music.title}</li>)}
        </ul>
  
    </div>);
  
  }
}

export default App;
