import ReactDOM from 'react-dom';
<<<<<<< HEAD
import loadable from '@loadable/component';
import React, {Suspense, lazy, createContext} from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';

=======
import React, {Suspense, lazy} from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
>>>>>>> 5bc53c6be969b7a0fed55187fb0aaebe56c14f1a
import Loading from '$com/Loading';
import '../html/init.css';

// 主页
const Index = loadable(() => import(`./Index`));


// 第二页
<<<<<<< HEAD
const Page2 = loadable(() => import('./Page2'));
=======
const Home = lazy(() => import('./Home'));
>>>>>>> 5bc53c6be969b7a0fed55187fb0aaebe56c14f1a

// 第二页
const Nomatch = loadable(() => import('./Nomatch'));

<<<<<<< HEAD
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

function App(props) {
  const baseName = location.host.includes('localhost') ? '' : '/alex-rsp'; 

  console.log('baseName：', baseName)
 
=======
function App() {
  const baseName = location.host.includes('localhost') ? '' : '/alex-rsp'; 

>>>>>>> 5bc53c6be969b7a0fed55187fb0aaebe56c14f1a
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
          {/* <Route path="*">
            <Nomatch />
          </Route> */}
        </Switch>
      </Suspense>
    </Router>
  )
};

// console.log(<App />)

ReactDOM.render(
  <App />,
  document.getElementById('root')  
)
