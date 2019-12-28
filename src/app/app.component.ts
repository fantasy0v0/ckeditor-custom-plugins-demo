import { Component, ViewChild, OnInit } from '@angular/core';
import * as ClassicEditor from 'ckeditor/ckeditor';
import { CKEditorComponent } from '@ckeditor/ckeditor5-angular';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  
  name = 'Angular';

  Editor = ClassicEditor;
  
  html = '<p>hello </p>t<b>e</b>st';

  config = {
    language: 'zh-cn',
		fontColor: {
      // Display 6 columns in the color grid.
      columns: 6,
      // And 12 document colors (2 rows of them).
      documentColors: 12,
      // ...
    },
    fontSize: {
      options: [
        'tiny',
        'small',
        'default',
        'big',
        'huge'
      ]
    },
    fontFamily: {
      options: [
          'default',
          'Ubuntu, Arial, sans-serif',
          'Ubuntu Mono, Courier New, Courier, monospace'
      ]
  },codeBlock: {
    languages: [
        // Do not render the CSS class for the plain text code blocks.
        { language: 'plaintext', label: 'Plain text', class: '' },

        // Use the "php-code" class for PHP code blocks.
        { language: 'php', label: 'PHP', class: 'php-code' },

        // Use the "js" class for JavaScript code blocks.
        { language: 'javascript', label: 'JavaScript', class: 'js' },

        // Python code blocks will have the default "language-python" CSS class.
        { language: 'python', label: 'Python' }
    ]
}
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
