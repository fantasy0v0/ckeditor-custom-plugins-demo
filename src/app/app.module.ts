import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { HighlightModule } from 'ngx-highlightjs';
import 'ckeditor/translations/zh-cn';

@NgModule({
  imports:      [ BrowserModule, FormsModule, CKEditorModule, HighlightModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
