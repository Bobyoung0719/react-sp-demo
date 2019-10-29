import React from 'react';
import {useHistory} from 'react-router-dom';
import styles from './index.less';

function Index() {
  const {push} = useHistory();

  return (
    <div className={styles.container}>
      <button onClick={() => push('/page/all')}>next page</button>
    </div>
  )
}
export default Index;