import { Component, OnInit } from '@angular/core';

const sampleData: any[] = [
  {data: [65,70,75,80,100], label: "Pi"},
  {data: [25,50,30,35,40], label: "Burndown"}
];

const sampleLabels: string[] = ["Sprint 1", "Sprint 2", "Sprint 3", "Sprint 4", "Sprint 6"];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  public lineChartData: any[] = sampleData;
  public lineChartLabels: string[] = sampleLabels;
  public lineChartOptions: any={
    scaleShowVerticaleLines: false,
    responsive: true
  };
  public lineChartLegend = true;
  public lineChartType = 'line';

  ngOnInit() {
  }

}
