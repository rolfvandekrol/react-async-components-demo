

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  match as Match,
} from 'react-router-dom';

import Home from './components/home/index';
import About from './components/about/index';
import Topics from './components/topics/index';

import { asyncComponent, importCallback } from './components/generic/async';

const BasicExample = () => (
  <Router>
    <div className="wrapper">
      <div className="menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>
      </div>

      <div className="content">
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/>
      </div>
    </div>
  </Router>
)

ReactDOM.render(<BasicExample />, document.getElementById('container'));
