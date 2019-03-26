import React, { Component } from 'react';
import './App.css';

import Card from './components/card/Card';
import Search from './components/search-bar/Search';
import { GetUsers } from './helpers/Api';

class App extends Component {

  state = {
    searchBarValue: '',
    users: []
  }

  handleChange = (e) => {
    this.setState({ searchBarValue: e.target.value })
  }

  renderContacts() {
    return this.state.users.filter((item) => {
      return item.name.first.toLowerCase().includes(this.state.searchBarValue.toLowerCase())
    })
    .map((item, index) => {
      return <Card key={index} props={item} highlight={this.state.searchBarValue}/>
    });
  }

  async componentWillMount() {
    await GetUsers(50, 'br').then(res => {
      this.setState({ users: res.data.results })
    })
  }

  render() {
    return (
      <div className="App">
        <Search onChange={this.handleChange} placeholder="Type a text fo filter" />
        <div className="CardComponentContainer">
          { this.renderContacts() }
        </div>
      </div>
    );
  }
}

export default App;
