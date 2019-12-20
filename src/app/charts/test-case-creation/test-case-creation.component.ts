import { Component, OnInit } from '@angular/core';

const sampleData: any[] = [
  {data: [65,84,72,61,65,65,84,72,61,65], label: "Failed"},
  {data: [50,80,85,63,72,78,55,67,62,70], label: "Passed"},
  {data: [85,67,55,70,67,65,84,72,61,65], label: "Blocked"},
  {data: [66,67,75,77,80,55,81,72,61,65], label: "Never-Run"},
];

const sampleLabels: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov"];

@Component({
  selector: 'app-test-case-creation',
  templateUrl: './test-case-creation.component.html',
  styleUrls: ['./test-case-creation.component.css']
})
export class TestCaseCreationComponent implements OnInit {

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
