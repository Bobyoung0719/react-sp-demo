import React, { Component } from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import './index.scss';
import '../styles/init.css';

class Index extends Component {
  constructor(props) {
    super(props);
    
  }
  
  componentDidMount() {
    const myChart = echarts.init(document.getElementById('main'));

    myChart.setOption({
      title: {
        text: '测试echarts-demo'
      },

      grid: {
        top: 40,
        left: 40,
        right: 10,
        bottom: 20
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1', '2', '3', '4', '5'],
        axisLine: {show: false},
        axisLabel: {
          color: '#999',
          fontSize: '22px',
          formatter(v, i) {
            return `${v}月`;
          }
        },
        axisTick: {
          show: false
        },
        axisPointer: {
          show: true,
          lineStyle: {
            color: '#ccc'
          }
        }
      },
      yAxis: {
        type: 'value',
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#999',
          fontSize: '22px',
          formatter(v, i) {
            return `${v}%`
          }
        }
      },
      tooltip: {
        trigger: 'axis',
        // formatter([], ) {

        // }
        textStyle: {}
      },
      series: [
        {
          name: 'yangtao',
          type: 'line',
          symbol: 'circle',
          areaStyle: {
            color : 'rgba(0, 0, 0, .5)',
            origin: 'start'
          },
          lineStyle: '#f0392f',
          data: [1, 11, 32, 4, 15, 6]
        }
      ]
    });
  }
 

  render() {
    return (
      <div className="main" id="main">

      </div>
    );
  }
}

export default Index;