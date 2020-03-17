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

  const [isUpdate, setIsUpdate] = useState(false);

  function onTest () {
    setIsUpdate(true);

    // setTimeout(() => {
    //   setIsUpdate(false);
    // }, 1000);
  }

  useEffect(() => {
    console.log(isUpdate);
    console.log('object');
  }, [isUpdate]);
  return (
    <div className={styles.container}>
      <p onClick={onTest}>text</p>
      <p>—————— 哈哈哈 ————————</p>
      <button onClick={() => history.push('/page/all')}>next page</button>
    </div>
  )
}
export default Index;