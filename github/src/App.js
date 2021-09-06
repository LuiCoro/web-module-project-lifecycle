import './App.css';
import React from 'react';
import axios from 'axios'


class App extends React.Component {
  state = {
    followerList: [],
    followers: 0,
    user: {}
  }
  
  
  componentDidMount() {
    axios.get(`https://api.github.com/users/LuiCoro/followers`)
      .then(resp => {
        this.setState({
          followerList: resp.data,
        });
      })
      .catch(err => {
        console.log(err);
      })
    axios.get(`https://api.github.com/users/LuiCoro`)
      .then(resp => {
        this.setState({
          user: resp.data,
        });
      })
      .catch(err => {
        console.log(err);
      })
    
  }
  
  render() {
    return (
      <div>
        <div>
          <h2>My GitHub Information</h2>
          <div >
            <div>
              <img width={225} src={this.state.user.avatar_url} alt={this.state.user.name}/>
            </div>
            
            <div>
              <h3>Name : {this.state.user.name} </h3>
              <p>Bio : {this.state.user.bio} </p>
              <p>Location : {this.state.user.location}</p>
              <p>Followers Count : {this.state.user.followers}</p>
              <p>Following : {this.state.user.following}</p>
              <p>Public Repositorys : {this.state.user.public_repos}</p>>
            </div>
          
          </div>
        </div>
      </div>
    );
  }
}

export default App;