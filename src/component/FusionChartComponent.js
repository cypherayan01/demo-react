import React from "react";
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts,FusionTheme);

// FusionCharts configuration
const chartConfig = {
    type: 'column2d',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Sample Chart',
        subCaption: 'Using FusionCharts in React',
      },
      data: [
        {
          label: 'Jan',
          value: '100',
        },
        {
          label: 'Feb',
          value: '200',
        },
        {
          label: 'Mar',
          value: '150',
        },
        {
          label: 'Apr',
          value: '250',
        },
      ],
    },
  };

  const FusionChartComponent = () => {
    return  <div>
    <ReactFC {...chartConfig} />
  </div>;
  };

  export default FusionChartComponent;