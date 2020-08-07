import ReactDOM from 'react-dom';
import React, {Suspense, lazy} from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Loading from '$com/Loading';
import '../html/init.css';

// 主页
const Index = lazy(() => import(`./Index`));

// 第二页
const Home = lazy(() => import('./Home'));

function App() {
  const baseName = location.host.includes('localhost') ? '' : '/alex-rsp'; 

  return (
    <Router basename={baseName}>
      <Suspense fallback={<Loading visible/>}>
        <Switch>
          <Route path="/" exact>
            <Index />
          </Route>
          <Route path='/home/:id'>
            <Home />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  )
};

if(module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <App />,
  document.getElementById('root')  
)
