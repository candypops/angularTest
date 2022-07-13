import { Component, OnInit, ViewChild } from '@angular/core';
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
export class ProductGraphsComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Stock",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      title: {
        text: "Quiebres de stock"
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
      }
    };
   }

  ngOnInit(): void {
  }

}
