import { Component, ViewChild, OnInit, Pipe } from '@angular/core';
import * as ClassicEditor from 'ckeditor/ckeditor';
import { CKEditorComponent } from '@ckeditor/ckeditor5-angular';
import { MyCustomUploadAdapterPlugin } from './MyUploadAdapter';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  name = 'Angular';

  Editor = ClassicEditor;

  html = '<p onclick="alert(1)">测试一下</p>app.component.ts:37 <p><span style="color:hsl(0,75%,60%);">hellof</span></p><p>t<strong>e</strong>st&lt;script&gt;ffasfwf</p><pre data-language="JavaScript"><code class="language-javascript">console.log(asdf);</code></pre>';

  config = {
    language: 'zh-cn',
    extraPlugins: [ MyCustomUploadAdapterPlugin ]
  };

  @ViewChild('editor', {
    static: false
  }) editorComponent: CKEditorComponent;

  @ViewChild('editor1', {
    static: false
  }) editorComponent1: CKEditorComponent;

  constructor() {
    console.log(ClassicEditor);
  }

  ngOnInit(): void {
  }

  change(event: any) {
    this.html = this.editorComponent.editorInstance.getData();
    this.editorComponent1.editorInstance.setData(this.html);
    console.log(this.html);
  }

  test() {
    this.editorComponent.disabled = !this.editorComponent.disabled;
  }
}