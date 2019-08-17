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

 class Main extends Component {
  componentDidMount() {
    
  }

  render() {
    return (
      <Router>
        <Suspense fallback={<div>loading</div>}>
          <Switch location={this.props.location}>
            <Route path="/" component={Index} exact/>
            <Route path="/page2" component={Page2} />
            <Route component={NoMatch} />
          </Switch>
        </Suspense>
      </Router>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')  
)

// 实现热更新
if (module.hot) {
  module.hot.accept();
}
