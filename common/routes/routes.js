// 單純處理 Route 這一層
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from '../components/home/Home';
import Repos from '../components/repos/Repos';
import Repo from '../components/repos/Repo';
import About from '../components/about/About';
import TestApi from '../components/test-api/test-api';

export default function () {
  return (
    <Route path="/">
      <IndexRoute component={Home} />
      <Route path="/repos" component={Repos}>
        {/* 需搭配 server 端的 router 功能建置（node必須重啟），否則無法運行。 */}
        {/* <Route path="/repos/:userName/:repoName" component={Repo} /> */}
        <Route path="/repos/:userName" component={Repo} />
      </Route>
      <Route path="about" component={About} />
      <Route path="/test-api" component={TestApi} />
    </Route>
  );
}
