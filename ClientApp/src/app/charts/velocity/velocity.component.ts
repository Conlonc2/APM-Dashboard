import { Component, OnInit } from '@angular/core';

const sampleData: any[] = [
  {data: [85,76,69,70,69], label: "Actual", type: "line", fill: false},
  {data: [65,75,74,71,69], label: "Predicted"}
];

const sampleLabels: string[] = [
  "S1", "S2", "S3", "S4", "S5"
]

@Component({
  selector: 'app-velocity',
  templateUrl: './velocity.component.html',
  styleUrls: ['./velocity.component.css']
})
export class VelocityComponent implements OnInit {

  constructor() { }
  public chartData: any[] = sampleData;
  public chartLabels: any[] = sampleLabels;
  public chartOptions: any = {
    scaleShowVerticaleLines: false,
    responsive: true
  };
  public chartLegend = true;
  public chartType = "bar"
  ngOnInit() {
  }

}
