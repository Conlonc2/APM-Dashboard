import { Component, OnInit } from '@angular/core';
import { DbGrabComponent } from 'src/app/db-grab/db-grab.component';

const sampleData: any[] = [
  { data: [85, 76, 69, 70, 69, 65, 75, 74, 71, 69], label: "Actual", type: "line", fill: false },
  { data: [65, 75, 74, 71, 69, 85, 76, 69, 70, 69], label: "Predicted" }
];

const sampleLabels: string[] = ["S1", "S2", "S3", "S4", "S5"];

@Component({
  selector: 'app-velocity',
  templateUrl: './velocity.component.html',
  styleUrls: ['./velocity.component.css']
})
export class VelocityComponent implements OnInit {
  data:any[] = [];

  constructor(private _db: DbGrabComponent) { }
  public chartData: any[] = sampleData;
  public chartLabels: any[] = sampleLabels;
  public chartOptions: any = {
    scaleShowVerticaleLines: false,
    responsive: true
  };
  public chartLegend = true;
  public chartType = "bar"
  ngOnInit() {
    this._db.gatherData().subscribe((res) => {
      for (let index in res) {
        this.data.push(res[index])
      }
      this.chartData = [
        {data:[this.data[0]["velocity"],this.data[1]["velocity"],this.data[2]["velocity"],this.data[3]["velocity"],this.data[4]["velocity"],this.data[5]["velocity"]],label: "Actual", type: "line", fill: false  },
        {data:[this.data[0]["velocity_predicted"],this.data[1]["velocity_predicted"],this.data[2]["velocity_predicted"],this.data[3]["velocity_predicted"],this.data[4]["velocity_predicted"],this.data[5]["velocity_predicted"]],label: "Predicted"}
        
      ]
    })
  }

}
