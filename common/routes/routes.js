// 單純處理 Route 這一層
import React from 'react';
import { Route, IndexRoute } from 'react-router';
// import Todo from './components';
import Home from '../components/home/Home';
import Repos from '../components/repos/Repos';
import Repo from '../components/repos/Repo';
import About from '../components/about/About';

export default function () {
  return (
    <Route path="/">
      <IndexRoute component={Home} />
      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo} />
      </Route>
      {/* <Route path="repos" component={Repos} />
      <Route component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo} />
      </Route> */}
      {/* <Route path="/repos/repo" component={Repo} /> */}
      <Route path="about" component={About} />
    </Route>
  );
}
