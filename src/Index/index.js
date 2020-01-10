import React, {
  useState,
  useContext,
  useCallback,
  useEffect,
} from 'react';
import styles from './index.less';

let xDiff = 0, startX = 0;
function Index(props) {
  const [list, setList] = useState([{text: '123455'}]);

  function addList() {
    list.push({text: 'new list-item'});

    setList([...list])
  }

  const [isStop, setIsStop] = useState(false);

  const [money, setMoney] = useState(0);

  const arr = ['0万', '10万','20万','30万','40万','50万','60万']

  useEffect(() => {
    const line = document.getElementById('line');
    const dom = document.getElementById('canvas');
    const ctx = dom.getContext('2d');

    const cline = line.getContext('2d');

    let dpr = window.devicePixelRatio; // 假设dpr为2
    // 获取css的宽高
    let { width: cssWidth, height: cssHeight } = dom.getBoundingClientRect();
    console.log(cssWidth, cssHeight, '=====');

    // dom
    dom.style.width = dom.width + 'px';
    dom.style.height = dom.height + 'px';
 
    dom.width = dpr * cssWidth;
    dom.height = dpr * cssHeight;
    // 由于画布扩大，canvas的坐标系也跟着扩大，如果按照原先的坐标系绘图内容会缩小
    // 所以需要将绘制比例放大
    ctx.scale(dpr,dpr);

    cline.fillStyle = "#f00";

    cline.fillRect(8, 0, 1, 28);
    ctx.fillStyle = "#ddd";

    ctx.fillRect(8, 27, 300, 1);

    
    

    for (let i = 0; i < 31; i++) {
      ctx.fillStyle = "#ddd";

      if(i%5 == 0) {
        // console.log(i, i /5);

        ctx.fillRect((i * 10) + 8, 0, 1, 28);
        // ctx.font = "12px Times New Roman";
        ctx.fillStyle = "#333";
        ctx.fillText(arr[i/5], i * 10, 42);
      } else {
        ctx.fillRect((i * 10) + 8, 10, 1, 18);
      }
    }

    const dos = document.getElementById('can');

    dos.addEventListener('scroll', scroll);
    // dos.addEventListener('touchstart', start);
    // dos.addEventListener('touchmove', move);
    // dos.addEventListener('touchend', end);

    // dos.addEventListener('scroll', evt => {
    //   const sl = evt.target.scrollLeft;

    //   console.log(sl);
    //   setMoney((sl * 2) / 10)
    // });
  }, []);

  function scroll(evt) {
    const sl = evt.target.scrollLeft;

    // setIsStop(sl >= 300);
  }

  function start(evt) {
    startX = evt.touches[0].pageX;
  }

  function move(evt) {
    xDiff = evt.touches[0].pageX - startX;

    console.log(xDiff);

    // setIsStop(xDiff <=0)
  }

  function end(evt) {
    setIsStop(false)
  }


  return (
    <div className={styles.container}>
      <button onClick={() => push('/page/all')}>next page</button>
      {list.map((v, i) => <div key={i} className={styles.item}>{v.text}</div>)}

      <button onClick={addList}>add-</button>

      <div className={styles.canvas}>
        <div className={styles['can-box']}>
          <div className={styles['money']}>{money}万</div>
          <canvas id="line" width="10" height="28" className={styles.in}></canvas>
          <div 
            className={styles.can} id="can"
            style={isStop ? {overflow: 'hidden'} : null}
          >
            <canvas id="canvas" width="600" height="46"></canvas>
          </div>
        </div>
        
      </div>
    </div>
  )
}
export default Index;