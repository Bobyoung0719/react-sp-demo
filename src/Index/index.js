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

    let xData = ['1-1', '2-2', '3-3', '4', '5-5']

    myChart.setOption({
      title: {
        text: '测试echarts-demo'
      },
      legend: {
        tooltip: {},
        data:[{
          name: 2,
          icon: 'circle',
          textStyle: {
            color: 'red'
          } 
        }]
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
        data: xData,
        axisLine: {show: false},
        axisLabel: {
          color: '#999',
          fontSize: '22px',
          padding: [0, 20],
          formatter(v, i) {
            if(i == 0 || i == xData.length - 1) {
              return v;
            } else {
              return null
            }
          }
        },
        axisTick: {
          show: false
        },
        
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
          color: '#000',
          fontSize: 10,
          formatter(v) {
            return `${v}%`
          }
        },

        splitLine: {
          lineStyle: {
            color: '#eee'
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
          name: '22222',
          type: 'line',
          symbol: 'circle',
          areaStyle: {
            color : 'rgba(0, 0, 0, .5)',
            origin: 'start'
          },
          lineStyle: '#f0392f',
          data: [-10, 0, 22, 10, 15, 6]
        },
        {
          name: '1111',
          type: 'line',
          symbol: 'circle',
          areaStyle: {
            color : 'rgba(0, 0, 0, .5)',
            origin: 'start'
          },
          lineStyle: '#000',
          data: [0, 10, 5, 50, -15, 6]
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