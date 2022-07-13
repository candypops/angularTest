import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-product-graphs',
  templateUrl: './product-graphs.component.html',
  styleUrls: ['./product-graphs.component.scss']
})
export class ProductGraphsComponent implements OnInit, OnChanges {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  @Input() dataSource = [];

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Stock",
          data: []
        }
      ],
      chart: {
        height: 350,
        type: "bar",
        zoom: {
          enabled: true
        }
      },
      title: {
        text: "Quiebres de stock"
      },
      xaxis: {
        type: "category",
        categories: []
      }
    };
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    const series = [];
    const categories = [];
    this.dataSource.forEach(d => {
      series.push(d?.count)
      categories.push(d?._id)
    })

    this.chartOptions.series = [{ data: series }];
    this.chartOptions = {...this.chartOptions, xaxis: {type: "category", categories: categories, tickPlacement: 'on'}}


  }
}
