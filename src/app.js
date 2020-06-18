'use strict'

import React, {Component} from 'react'
import axios from 'axios'

import AppContent from './components/app-content'

class App extends Component {
  constructor(){
    super()
    this.state = { 
      userinfo: null,
      repos: [],
      starred: []
    }
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if(keyCode === ENTER){
    axios.get(`https://api.github.com/users/${value}`)
      .then((result) => {
        const data = result.data
        this.setState({
          userinfo: {
            username: data.name,
            photo: data.avatar_url,
            login: data.login,
            repos: data.public_repos,
            followers: data.followers,
            following: data.following 
          }  
        })
      })
    }
  }
  
  getRepos (type) {
    return (e) => {
      axios.get(`https://api.github.com/users/nogueirajsx/${type}`)
        .then((result) => {
          const data = result.data
          this.setState({
            [type]: data.map((repo) => ({
                name: repo.name,
                link: repo.html_url
            }))
          }) 
        })
    }
  }
  render() {
    return <AppContent 
      userinfo={this.state.userinfo}
      photo={this.state.photo}
      repos={this.state.repos}
      starred={this.state.starred}
      handleSearch={(e) => this.handleSearch(e)}
      getRepos={this.getRepos('repos')}
      getStarred={this.getRepos('starred')}
    />
  }
}

export default App
