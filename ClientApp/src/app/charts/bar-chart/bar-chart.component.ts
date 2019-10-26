import { Component, OnInit } from '@angular/core';

const sampleData: any[] = [
  {data: [65,70,75,80,100], label: "Pi"},
  {data: [25,50,30,35,40], label: "Burndown"}
];

const sampleLabels: string[] = ["Sprint 1", "Sprint 2", "Sprint 3"];

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  public barChartData: any[] = sampleData;
  public barChartLabels: string[] = sampleLabels;
  public barChartOptions: any={
    scaleShowVerticaleLines: false,
    responsive: true
  };
  public barChartLegend = true;
  public barChartType = 'bar';

  ngOnInit() {
  }

}
