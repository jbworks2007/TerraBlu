import React from 'react'
import ReactEcharts from "echarts-for-react"

export default function PieChart() {

  const options = {
    // title: {
    //   text: 'Referer of a Website',
    //   subtext: 'Fake Data',
    //   left: 'center'
    // },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: '5%',
      top: '72%',
      textStyle: {
        color: 'white'
      }
    },
    series: [
      {
        name: 'Project',
        type: 'pie',
        radius: '50%',
        top: '-100',
        label: {
          show: false,
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Forest' },
          { value: 735, name: 'Energy' },
          { value: 580, name: 'Fuel' },
          { value: 484, name: 'Water' },
          { value: 300, name: 'Renewable' }
        ],
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
