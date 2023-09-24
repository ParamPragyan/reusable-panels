import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip, DateTime } from '@syncfusion/ej2-react-charts'





const data1 = [
    { x: new Date(2023, 8, 5), y: 5 },
    { x: new Date(2023, 8, 6), y: 6 },
    { x: new Date(2023, 8, 7), y: 8 },
    { x: new Date(2023, 8, 8), y: 7 },
    { x: new Date(2023, 8, 9), y: 11 },
  ];

const chart11 = () => {
  return (
    <SparklineComponent
    id='1'
    height='100px'
    width='150px'
    fill='black'
    valueType='Numeric'

    dataSource={data1}
    >
        <Inject services={[SparklineTooltip]}/>

    </SparklineComponent>
  )
}

export default chart11