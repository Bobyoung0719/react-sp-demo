import React, {
  useState,
  useContext,
  useCallback
} from 'react';
import {useHistory} from 'react-router-dom';
import {ThemeContext} from '../app';

import {tsTest} from './test';

import styles from './index.less';

const arrs = Array(10).fill(0);

function Index(props) {
  const [list, setList] = useState([1,2]);
  const theme = useContext(ThemeContext);

  const {push} = useHistory();

  function setDemo() {
    console.log(list);

    let po = list[list.length - 1];

    list.push(++po);


    setList([...list]);
  }

  const conRef = useCallback(node => {
    if(node !== null) {
      console.log(node);

      const sty = node.getBoundingClientRect()
      console.log(sty);
    }
  });

  return (
    <div className={styles.container}>
      <div ref={conRef}>
        {list.map(v => <li key={v + 1}>{v}</li>)}
      </div>
      <button onClick={setDemo}>增加条目</button>
      <button onClick={() => push('/page/all')}>next page</button>
      <div className={styles['grids-box']}>
        {arrs.map((v, i) => <div 
          key={i}
          className={styles[`g-${i+1}`]}
        >{i+1}</div>)}
      </div>
      <div>grid布局实例</div>
      <p>typescript 测试</p>
      <p>{tsTest(11)}</p>
    </div>
  )
}
export default Index;