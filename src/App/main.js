import ReactDOM from 'react-dom';
import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';

import '../styles/init.css';

// 主页
const Index = lazy(() => import('../Index'));

// 第二页
const Page2 = lazy(() => import('../Page2'));

// 未匹到的容错页
const NoMatch = lazy(() => import('../NoMatch'));

function Main() {
  return (
    <Router>
      <Suspense fallback={<div>loading</div>}>
        <Switch>
          <Route path="/" exact>
            <Index />
          </Route>
          <Route path="/page2">
            <Page2 />
          </Route>
          <Route component={NoMatch} />
        </Switch>
      </Suspense>
    </Router>
  )
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')  
)
