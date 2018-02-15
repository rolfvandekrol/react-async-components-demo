

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  match as Match,
} from 'react-router-dom';

import { asyncComponent, importCallback } from './components/generic/async';

const AsyncHome = asyncComponent((() => import(/* webpackChunkName: "components/home" */ "./components/home/index")) as importCallback<{}>);
const AsyncTopics = asyncComponent((() => import(/* webpackChunkName: "components/topics" */ "./components/topics/index")) as importCallback<{}>);
const AsyncAbout = asyncComponent((() => import(/* webpackChunkName: "components/about" */ "./components/about/index")) as importCallback<{}>);

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
        <Route exact path="/" component={AsyncHome}/>
        <Route path="/about" component={AsyncAbout}/>
        <Route path="/topics" component={AsyncTopics}/>
      </div>
    </div>
  </Router>
)

ReactDOM.render(<BasicExample />, document.getElementById('container'));
