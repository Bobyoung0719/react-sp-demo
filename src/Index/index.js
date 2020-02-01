import React, {
  useState,
  useContext,
  useCallback,
  useEffect,
} from 'react';
import styles from './index.less';

function Index(props) {
  return (
    <div className={styles.container}>
      <button onClick={() => push('/page/all')}>next page</button>
    </div>
  )
}
export default Index;