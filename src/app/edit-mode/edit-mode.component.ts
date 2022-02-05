import { Component, OnInit, ViewChild } from '@angular/core';
import { DemoFilePickerAdapter } from '../demo-file-picker.adapter';
import { FilePickerComponent, FilePreviewModel } from 'ngx-awesome-uploader';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-edit-mode',
  templateUrl: './edit-mode.component.html',
  styleUrls: ['./edit-mode.component.css']
})
export class EditModeComponent implements OnInit {
  @ViewChild('uploader', { static: true }) uploader: FilePickerComponent;
  public adapter = new DemoFilePickerAdapter(this.http);

  constructor(private http: HttpClient) {}

  public ngOnInit(): void {
    const files = [
      {
        fileName: 'My File 1 for edit.png'
      },
      {
        fileName: 'My File 2 for edit.xlsx'
      }
    ] as FilePreviewModel[];
    this.uploader.setFiles(files);
  }
}
