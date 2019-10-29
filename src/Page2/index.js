import React from 'react';
import {NavLink, useParams, useRouteMatch, useLocation} from 'react-router-dom';
import styles from './p2.less';

function Page2() {
  const {type} = useParams();
  // const match = useRouteMatch();
  // const location = useLocation();

  // console.log(params, match, location);

  let Content = type == 'all' ? <T1 /> : <T2 />
  

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {Content}
      </div>
      <div className={styles.footer}>
        <NavLink 
          to="/page/all"
          className={styles.btn}
          activeClassName={styles.actived}
        >all</NavLink>
        <NavLink 
          to="/page/my"
          className={styles.btn}
          activeClassName={styles.actived}
        >my</NavLink>
      </div>
    </div>
  )
};

function T1() {
  return <p>111111111</p>
}

function T2() {
  return <p>222222</p>
}

export default Page2;