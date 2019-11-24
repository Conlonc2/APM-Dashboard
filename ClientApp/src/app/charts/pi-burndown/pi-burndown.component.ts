import { Component, OnInit } from '@angular/core';

const sampleData: any[] = [
  {data: [65,84,72,61,65], label: "Planned", fill: false},
  {data: [85,67,55,70,67], label: "Completed", type:"bar"}
];

const sampleLabels: string[] = ["Sprint 1", "Sprint 2", "Sprint 3", "Sprint 4", "Sprint 5"];

@Component({
  selector: 'app-pi-burndown',
  templateUrl: './pi-burndown.component.html',
  styleUrls: ['./pi-burndown.component.css']
})
export class PiBurndownComponent implements OnInit {

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
