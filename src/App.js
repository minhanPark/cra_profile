import React, { Component } from 'react';
import './App.css';
import Profile from './profile'

class App extends Component {

  state = {

  }

  componentDidMount(){
    this._getProfile();
  }

  _callAPI = () => {
    return fetch('https://randomuser.me/api/?results=15')
    .then(response => response.json())
    .then(json => json.results)
    .catch(err => console.log(err))
  }

  _getProfile = async () => {
    const profiles = await this._callAPI();
    console.log(profiles)
    this.setState({profiles})
  }

  _renderProfile = () => {
    const profiles = this.state.profiles.map((profile, index) => {
      return <Profile
      first={profile.name.first}
      key={index}
      last={profile.name.last}
      profile_image={profile.picture.large}
      birth={profile.dob}
      email={profile.email}
      />
    })
    return profiles;
  }



  render() {
    const {profiles} = this.state;
    return (
      <div className={profiles ? "App" : "App-loading"}>
        {this.state.profiles ? this._renderProfile() : "Profile creating ....!"}
      </div>
    );
  }
}

export default App;
