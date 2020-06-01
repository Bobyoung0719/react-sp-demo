import ReactDOM from 'react-dom';
import React, 
{
  Suspense, 
  lazy, 
  createContext
} from 'react';
import {
  Route, 
  Switch, 
  useParams,
  BrowserRouter as Router
} from 'react-router-dom';
import Loading from '$com/Loading';
import '../html/init.css';

// 主页
const Index = lazy(() => import('./Index'));

// 第二页
const Page2 = lazy(() => import('./Page2'));

console.log(Index);

const themes = {
  light: {
    headColor: '#84c225',
    backGround: '#f00'
  },

  dark: {
    headColor: '#ccc',
    backGround: '#000'
  }
}

export const ThemeContext = createContext(themes);

function App() {
  const baseName = location.host.includes('localhost') ? '' : '/alex-rsp'; 
  console.log(baseName)

  return (
    <Router baseName={baseName}>
      <Suspense fallback={<Loading visible/>}>
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
