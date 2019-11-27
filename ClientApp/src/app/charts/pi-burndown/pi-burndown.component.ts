import { Component, OnInit } from '@angular/core';

const sampleData: any[] = [
  {data: [65,84,72,61,65,65,84,72,61,65], label: "Actual", fill: false, type: "line"},
  {data: [85,67,55,70,67,65,84,72,61,65], label: "Effort", type:"bar"}
];

const sampleLabels: string[] = ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9", "S10"];

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
  public lineChartType = 'bar';
  ngOnInit() {
  }

}
