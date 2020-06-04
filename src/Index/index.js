import React from 'react';
import {useHistory} from 'react-router-dom'
import styles from './index.less';

function Index(props) {
  let history = useHistory();

  return (
    <div className={styles.container}>
      <p>—————— 哈哈哈 ————————</p>
      <button onClick={() => history.push('/page/1')}>next page</button>
      <button onClick={() => history.push('/no-match')}>no-match</button>
    </div>
  )
}
export default Index;