import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// render() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//           </p>
//         <p>
//           {this.state.string}
//         </p>
//         <button onClick={() => this.setState({ string: 'buby' })}>
//           click me plz
//           </button>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

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
      string: 'This is test from state',
      people: [
        {
          name: 'Bill',
          id: '1'
        },
        {
          name: 'Jim',
          id: '2'
        },
        {
          name: 'Jane',
          id: '3'
        }
      ]
    };
  }

  render() {
    return (
      <div className='App'>
        {
          this.state.people.map( person => {
            return (
              <h1 key={ person.id }> {person.name} </h1>
            );
          })
        }
      </div>
    )
  }
}

export default App;
