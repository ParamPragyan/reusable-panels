import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Category,
  Legend,
  DateTime,
  Tooltip,
  ColumnSeries,
  DataLabel,
  Highlight,
} from "@syncfusion/ej2-react-charts";
// import { Browser } from "@syncfusion/ej2-base";

const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }`;
const Column = () => {
  const loaded = (args) => {
    let chart = document.getElementById("charts");
    chart.setAttribute("title", "");
  };
  const load = (args) => {
    let selectedTheme = location.hash.split("/")[1];
    selectedTheme = selectedTheme ? selectedTheme : "Material";
    args.chart.theme = (
      selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
    )
      .replace(/-dark/i, "Dark")
      .replace(/contrast/i, "Contrast");
    if (selectedTheme === "highcontrast") {
      args.chart.series[0].marker.dataLabel.font.color = "#000000";
      args.chart.series[1].marker.dataLabel.font.color = "#000000";
      args.chart.series[2].marker.dataLabel.font.color = "#000000";
    }
  };

  const data1 = [
    { x: new Date(2023, 8, 5), y: 5 },
    { x: new Date(2023, 8, 6), y: 6 },
    { x: new Date(2023, 8, 7), y: 8 },
    { x: new Date(2023, 8, 8), y: 7 },
    { x: new Date(2023, 8, 9), y: 11 },
  ];

  return (
    <div className="control-pane flex items-center justify-center h-[100vh]">
      <style>{SAMPLE_CSS}</style>
      <div className="control-section">
        <ChartComponent
          id="charts"
          style={{ textAlign: "center" }}
          legendSettings={{ enableHighlight: true }}
        
          primaryXAxis={{
            valueType: "DateTime",
            edgeLabelPlacement: "Shift",
            majorGridLines: { width: 0 },
            labelFormat: "MMM-d",
          }}
          primaryYAxis={{
            title: "Hours per day",
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            maximum: 15,
            interval: 5,
          }}
          chartArea={{ border: { width: 0 } }}
          load={load.bind(this)}
          tooltip={{
            enable: true,
            header: "",
            shared: true,
          }}
          width={Window.isDevice ? "100%" : "35%"}
          title="Olympic Medal Counts - RIO"
          loaded={loaded.bind(this)}
        >
          <Inject
            services={[
              ColumnSeries,
              Legend,
              DateTime,
              Tooltip,
              Category,
              DataLabel,
              Highlight,
            ]}
          />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={data1}
              tooltipMappingName="toolTipMappingName"
              xName="x"
              columnSpacing={0.1}
              yName="y"
              name="Gold"
              type="Column"
              cornerRadius={{
                topLeft: Window.isDevice ? 12 : 12,
                topRight: Window.isDevice ? 12 : 12,
              }}
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};
export default Column;
