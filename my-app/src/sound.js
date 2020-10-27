import React from 'react';



     class Sound extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
              search: '',
              // music: []

            
          };
          this.handleChange = this.handleChange.bind(this);
        }
        handleChange(event) {
            this.setState({search: event.target.value});
            this.props.music.filterMusic(this.state.search);
          }


          render() {
            // let filteredInfo = this.props.music.filter(
            //   (title) => {
            //     return this.state.music.title.indexOf(this.state.search) !== -1;
            //   }
            // )
            return (
              <div>
                {/* <ul>
                  {filteredInfo.map((music) => {
                    return <Sound music ={music}
                        key={music.id}/>
                  })}

                </ul> */}
                <input type="text"
                  value={this.state.search}
                  onChange={this.handleChange}/>
              </div>
            )

        }
      
      // export default Sound;

      navigationSection() {
        return (
          <section className="navbar">
            <a href="music/" className="item">Home</a>
            <a href="title" className="item">Title</a>
            <a href="artist" className="item">Artist</a>
            <a href="album" className="item">Album</a>
            <a href="genre" className="item">Genre</a>
            <a href="releaseDate" className="item">Release Date</a>
          </section>
            );
        }
     }
       export default Sound;