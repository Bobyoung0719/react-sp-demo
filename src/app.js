import ReactDOM from 'react-dom';
import React, {Suspense, lazy} from 'react';
import {
  Route, 
  Switch, 
  useParams,
  BrowserRouter as Router
} from 'react-router-dom';
import Loading from '$com/Loading';
import '../common/init.css';

// 主页
const Index = lazy(() => import('./Index'));

// 第二页
const Page2 = lazy(() => import('./Page2'));

function App() {

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/" exact>
            <Index />
          </Route>
          <Route path="/page/:type">
            <Page2 />
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
