import { FilePickerComponent } from "ngx-awesome-uploader";
import { ValidationError } from "ngx-awesome-uploader";
import { FilePreviewModel } from "ngx-awesome-uploader";
import { UploaderCaptions } from "ngx-awesome-uploader";
import { HttpClient } from "@angular/common/http";
import { DemoFilePickerAdapter } from "../demo-file-picker.adapter";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay, map } from "rxjs/operators";
@Component({
  selector: "advanced-demo",
  templateUrl: "./advanced-demo.component.html",
  styleUrls: ["./advanced-demo.component.css"]
})
export class AdvancedDemoComponent {
  @ViewChild("uploader", { static: false }) uploader: FilePickerComponent;
  public adapter = new DemoFilePickerAdapter(this.http);
  public myFiles: FilePreviewModel[] = [];
  captions: UploaderCaptions = {
    dropzone: {
      title: "Fayllari bura ata bilersiz",
      or: "və yaxud",
      browse: "Fayl seçin"
    },
    cropper: {
      crop: "Kəs",
      cancel: "Imtina"
    },
    previewCard: {
      remove: "Sil",
      uploadError: "Fayl yüklənmədi"
    }
  };
  constructor(private http: HttpClient) {}

  public onValidationError(error: ValidationError): void {
    alert(`Validation Error ${error.error} in ${error.file.name}`);
  }
  public onUploadSuccess(e: FilePreviewModel): void {
    console.log(e);
    console.log(this.myFiles);
  }
  public onRemoveSuccess(e: FilePreviewModel) {
    console.log(e);
  }
  public onFileAdded(file: FilePreviewModel) {
    this.myFiles.push(file);
  }
  public myCustomValidator(file: File): Observable<boolean> {
    if (!file.name.includes("uploader")) {
      return of(true).pipe(delay(2000));
    }
    // if (file.size > 50) {
    //   return this.http.get('https://vugar.free.beeceptor.com').pipe(map((res) =>  res === 'OK' ));
    // }
    return of(false).pipe(delay(2000));
  }
}
