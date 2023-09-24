import React from 'react';
import { useEffect } from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, Legend, DateTime, Tooltip, Category } from '@syncfusion/ej2-react-charts';
import { Browser } from '@syncfusion/ej2-base';

const data2 = [
  { x: new Date(2023, 8, 5), y: 5 },
  { x: new Date(2023, 8, 7), y: 6 },
  { x: new Date(2023, 8, 10), y: 8 },
  { x: new Date(2023, 8, 15), y: 7 },
  { x: new Date(2023, 8, 20), y: 11 },
];

const SAMPLE_CSS = `
  .control-fluid {
      padding: 0px !important;
  }
  .charts {
      align :center
  }`;

const Line = () => {
  const onChartLoad = (args) => {
    let chart = document.getElementById('charts');
    chart.setAttribute('title', '');
  };

  const load = (args) => {
    let selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1))
      .replace(/-dark/i, 'Dark')
      .replace(/contrast/i, 'Contrast');
  };

  return (
    <div className="control-pane h-[100vh] bg-[#1e1e1e] border border-green-700 flex items-center justify-center">
      <style>{SAMPLE_CSS}</style>
      <div className="control-section">
        <ChartComponent
          id="charts"
          style={{ textAlign: 'center' }}
          primaryXAxis={{ valueType: 'DateTime', edgeLabelPlacement: 'Shift', majorGridLines: { width: 0 }, labelFormat: 'MMM-d' }}
          load={load.bind(this)}
          primaryYAxis={{
            title: 'Time per Day (Hours)',
            titleStyle: { color: 'white' }, // Update the y-axis title
            rangePadding: 'None',
            minimum: 0,
            maximum: 15, // Adjust the maximum value based on your data (24 hours)
            interval: 3, // Adjust the interval based on your data
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 },
          }}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          legendSettings={{ enableHighlight: true }}
          width={Browser.isDevice ? '100%' : '75%'}
          title="Time per Day"
          titleStyle={{ color: 'white' }}
          loaded={onChartLoad.bind(this)}
        >
          <Inject services={[LineSeries, DateTime, Legend, Tooltip, Category]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={data2}
              xName="x"
              yName="y"
              name="line"
              width={2}
              marker={{ visible: true, width: 7, height: 7, shape: 'Circle', isFilled: true }}
              type="Line"
            ></SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Line;

