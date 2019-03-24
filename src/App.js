import React, { Component } from 'react';
import './App.css';

import Card from './components/card/Card';
import Search from './components/search-bar/Search';
import { GetUsers } from './helpers/Api';

class App extends Component {

  state = {
    count: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    filtered: [],
    users: []
  }

  handleChange = (e) => {
    let currentList = [];
    let newList = [];

    if (e.target.value !== '') {
      //Set the current list
      currentList = this.state.users;

      //Filter the items based on the input value
      newList = currentList.map((item) => {
        const entry = e.target.value.toLowerCase();
        const itemFiltered = item;

        if (itemFiltered.name.first.includes(entry)) {
          return itemFiltered
        }

      });
    }
    else {
      newList = this.state.users;
    }

    this.setState({
      filtered: newList
    })
  }

  async componentWillMount() {
    await GetUsers(50, 'br').then(res => {
      this.setState({ users: res.data.results, filtered: res.data.results })
    })
  }

  render() {
    return (
      <div className="App">
        <Search onChange={this.handleChange} placeholder="Type a text fo filter" />
        <div className="CardComponentContainer">
          {this.state.filtered.map((item, index) => { return <Card key={index} user={item} /> })}
        </div>
      </div>
    );
  }
}

export default App;
