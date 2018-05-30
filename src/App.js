import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Note, Header } from './components';
import { Home, About, Articles } from './Static';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      noteRegister: localStorage.getItem('noteRegister')?localStorage.getItem('noteRegister'):'',
    };
  }

  noteRegist = value => {
    this.setState({ noteRegister: value });
    localStorage.setItem('noteRegister', value);
  };

  render() {
    return (
      <div className="App">
        <Header />

        <Switch>
          {[
            {
              path: '/note',
              component: (
                <Note
                  noteRegist={this.noteRegist}
                  noteRegister={this.state.noteRegister}
                />
              )
            },
            {
              path: '/',
              component: <Note static={Home} />
            },
            {
              path: '/about',
              component: <Note static={About} />
            },
            {
              path: '/articles',
              component: <Note static={Articles} />
            }
          ].map((v, i) => {
            return (
              <Route
                key={i}
                exact
                path={v.path}
                render={props => v.component}
              />
            );
          })}
        </Switch>
      </div>
    );
  }
}

export default App;
