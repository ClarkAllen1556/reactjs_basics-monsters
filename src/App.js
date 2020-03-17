import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

/**
 * Classes can be created that are inherit from Component.
 * These have render function which will define how the component
 * will be rendered.
 * We can just copy paste the return(...) from above and have the
 * class' render(...) return the same data and it will function
 * in pretty much the same manner.
 */
class App extends Component {
  /**
   * React components have a state value which describes some
   * current status of the current environment.
   *
   * It exists in the Component class and it is inherited.
   *
   * The state value can be modified by using the setState(...)
   * which is also inherited from parent Component class.
   */
  constructor() {
    super();

    this.state = {
      people: [],
      searchField: ''
    };

    // this.changeHandler = this.changeHandler.bind(this);
  }

  async componentDidMount() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    let usrs = await resp.json();

    this.setState({ people: usrs });
  }

  changeHandler = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { people, searchField } = this.state;
    const filteredPeople = people.filter( person =>
      person.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>Some Cool Boiz</h1>
        <SearchBox
          placeholder='Search for Boyz'
          changeHandler={ this.changeHandler }
        />
        <CardList people={ filteredPeople } />
      </div>
    )
  }
}

export default App;
