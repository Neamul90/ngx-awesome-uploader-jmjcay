import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SimpleDemoComponent } from './simple-demo/simple-demo.component';
import { AdvancedDemoComponent } from './advanced-demo/advanced-demo.component';
import {FilePickerModule} from 'ngx-awesome-uploader';
import {AppRoutingModule} from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import { AboutAuthorComponent } from './about-author/about-author.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { EditModeComponent } from './edit-mode/edit-mode.component';
@NgModule({
  imports: [
     BrowserModule,
     BrowserAnimationsModule,
     FormsModule, 
     FilePickerModule,
     AppRoutingModule,
     HttpClientModule
  ],
  declarations: [ 
      AppComponent,
      SimpleDemoComponent,
      AdvancedDemoComponent,
      AboutAuthorComponent,
      EditModeComponent 
  ],
  bootstrap:  [ AppComponent ],
  providers: []
})
export class AppModule { }
