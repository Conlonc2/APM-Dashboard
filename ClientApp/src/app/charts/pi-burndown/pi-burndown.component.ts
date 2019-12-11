import { Component, OnInit } from '@angular/core';
import { DbGrabComponent } from 'src/app/db-grab/db-grab.component';

const sampleData: any[] = [
  { data: [65, 84, 72, 61, 65, 65, 84, 72, 61, 65], label: "Actual", fill: false, type: "line" },
  { data: [100, 67, 55, 70, 67, 65, 84, 72, 61, 65], label: "Effort", type: "bar" }
];

const sampleLabels: string[] = ["S1", "S2", "S3", "S4", "S5"];

@Component({
  selector: 'app-pi-burndown',
  templateUrl: './pi-burndown.component.html',
  styleUrls: ['./pi-burndown.component.css']
})
export class PiBurndownComponent implements OnInit {
  data: any[] = [];
  constructor(private _db: DbGrabComponent) { }

  public lineChartData: any[] = sampleData;
  public lineChartLabels: string[] = sampleLabels;
  public lineChartOptions: any = {
    scaleShowVerticaleLines: false,
    responsive: true
  };
  public lineChartLegend = true;
  public lineChartType = 'bar';
  ngOnInit() {
    this._db.gatherData()
      .subscribe((res) => {
        for (let index in res) {
          this.data.push(res[index]);
        }
        this.lineChartData = [
          {data: [this.data[0]["points_completed"],this.data[1]["points_completed"],this.data[2]["points_completed"],this.data[3]["points_completed"],this.data[4]["points_completed"],this.data[5]["points_completed"]], label: "Actual",fill:"false", type:"line"},
          {data: [this.data[0]["points_planned"],this.data[1]["points_planned"],this.data[2]["points_planned"],this.data[3]["points_planned"],this.data[4]["points_planned"],this.data[5]["points_planned"]], label: "Effort", type:"bar"}
        ]
      })
  }
}
