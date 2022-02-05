import { Component, OnInit } from "@angular/core";
import { DemoFilePickerAdapter } from "../demo-file-picker.adapter";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "simple-demo",
  templateUrl: "./simple-demo.component.html",
  styleUrls: ["./simple-demo.component.css"]
})
export class SimpleDemoComponent implements OnInit {
  public adapter = new DemoFilePickerAdapter(this.http);

  constructor(private http: HttpClient) {}

  public ngOnInit(): void {}

  public uploadSuccess(event): void {
    console.log(event);
  }
}
