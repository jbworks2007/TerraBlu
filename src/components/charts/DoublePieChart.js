import React from 'react'
import ReactEcharts from "echarts-for-react"

export default function DoublePieChart() {

  const options = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: "vertical",
      top: "10%",
      left: "left",
      // height: '180px', give height accordingly to adjust the legends in two column
      textStyle: {
        color: "white"
      }
    },
    series: [
      {
        name: 'Category',
        type: 'pie',
        left: "42%",
        selectedMode: 'single',
        radius: ['40%', '55%'],
        center: ["37%", "37%"],
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 54, name: 'Fuels' },
          { value: 77, name: 'Owned Vehicles' },
          { value: 67, name: 'MarkRefrigerant' },
          { value: 44, name: 'Business Travel - Land & Sea' },
        ]
      },
      {
        name: 'Category',
        type: 'pie',
        left: "42%",
        radius: ['55%', '70%'],
        center: ["37%", "37%"],
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 50, name: 'Freighting Goods' },
          { value: 25, name: 'Food' },
          { value: 13, name: 'Water' },
          { value: 51, name: 'Flight' },
        ]
      }
    ]
  };

  return (
    <ReactEcharts
      option={options}
      style={{ height: "300px", margin: "0px" }}
    />
  )
}
