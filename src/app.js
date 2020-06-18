'use strict'

import React, {Component} from 'react'

import AppContent from './components/app-content'

class App extends Component {
  constructor(){
    super()
    this.state = {
      userinfo: {
        username: "Rodrigo Nogueira",
        photo: "https://avatars3.githubusercontent.com/u/44399537?v=4",
        login: "nogueirajsx",
        repos: 12,
        followers: 10,
        following: 13
      }, 
      repos: [{
        name: "Repo",
        link: "#"
      }],
      starred: [{
        name: "Repo",
        link: "#"
      }]
    }
  }

  render() {
    return <AppContent 
      userinfo={this.state.userinfo}
      photo={this.state.photo}
      repos={this.state.repos}
      starred={this.state.starred}
    />
  }
}

export default App
