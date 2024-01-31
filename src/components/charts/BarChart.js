import React from 'react'
import ReactEcharts from "echarts-for-react"

export default function BarChart() {

  const options = {
    legend: {
      top: '85%',
      data: ['Offset Qty. (t CO2e)', 'Emission Qty. (t CO2e)'],
      textStyle: {
        color: 'white'
      }
    },
    grid: {
      top: "7%",
      height: "65%"
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Offset Qty. (t CO2e)',
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        barGap: 0,
        itemStyle: {
          opacity: 0.6
        }
      },
      {
        name: 'Emission Qty. (t CO2e)',
        data: [100, 150, 120, 180, 110, 170, 100],
        type: 'bar',
        itemStyle: {
          opacity: 0.6
        }
      }
    ]
  };

  return (
    <>
      <ReactEcharts
        style={{ height: "300px", margin: "0px" }}
        option={options}
      />
    </>
  )
}
