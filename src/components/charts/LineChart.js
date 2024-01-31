import React from 'react'
import ReactEcharts from "echarts-for-react"

export default function LineChart() {

  const options = {
    legend: {
      left: 'center',
      top: '85%',
      data: ['Goal', 'Current'],
      icon: "roundRect",
      textStyle: {
        color: 'white'
      }
    },
    grid: {
      top: "7%",
      height: "65%"
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Goal',
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
        itemStyle: {
          color: '#73C0DE'
        }
      },
      {
        name: 'Current',
        data: [10, 20, 24, 21, 35, 47, 60],
        type: 'line',
        itemStyle: {
          color: '#F765A3'
        }
      }
    ]
  };


  return (
    <>
      <ReactEcharts
        option={options}
        style={{ height: "300px", margin: "0px" }}
      >
      </ReactEcharts>
    </>
  )
}
