import ReactDOM from 'react-dom';
import React, {Suspense, lazy} from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Loading from '$com/Loading';
import '../html/init.css';

// 主页
const Index = lazy(() => import(`./Index`));

// 第二页
const Home = lazy(() => import('./Home'));

// 第二页
const Nomatch = lazy(() => import('./Nomatch'));

function App() {
  const baseName = location.host.includes('localhost') ? '' : '/alex-rsp'; 

  return (
    <Router basename={baseName}>
      <Suspense fallback={<Loading visible/>}>
        <h2 style={{
          textAlign: 'center',
          padding: '10px 0'
        }}>hello react-router</h2>
        <Switch>
          <Route path="/" exact>
            <Index />
          </Route>
          <Route path='/home/:id'>
            <Home />
          </Route>
          <Route path="/no-match">
            <Nomatch />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  )
};

ReactDOM.render(
  <App />,
  document.getElementById('root')  
)
