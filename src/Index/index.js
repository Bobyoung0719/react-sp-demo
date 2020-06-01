import React, {
  useState,
  useContext,
  useCallback,
  useEffect,
} from 'react';
import {useHistory} from 'react-router-dom'
import styles from './index.less';

function Index(props) {
  let history = useHistory();
  const [data, setData] = useState([1,2,3]);

  return (
    <div className={styles.container}>
      <p>—————— 哈哈哈 ————————</p>
      <button onClick={() => history.push('/page/1')}>next page</button>
    </div>
  )
}
export default Index;