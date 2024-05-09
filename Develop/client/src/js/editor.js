import { getDb, putDb } from './database';
import { header } from './header';

export default class {
  constructor() {
    const localData = localStorage.getItem('content');
    console.log('Retrieved content from local storage:', localData);

    // check if CodeMirror is loaded
    if (typeof CodeMirror === 'undefined') {
      throw new Error('CodeMirror is not loaded');
    }

    this.editor = CodeMirror(document.querySelector('#main'), {
      value: '',
      mode: 'javascript',
      theme: 'monokai',
      lineNumbers: true,
      lineWrapping: true,
      autofocus: true,
      indentUnit: 2,
      tabSize: 2,
    });

    // When the editor is ready, set the value to whatever is stored in indexeddb.
    // Fall back to localStorage if nothing is stored in indexeddb, and if neither is available, set the value to header.
    getDb().then((data) => {
      console.info('Loaded data from IndexedDB:', data);
      console.info('Loaded data from IndexedDB, injecting into editor');
      const content = data || localStorage.getItem('content') || header;
      console.info('Content to be injected into editor:', content);
      this.editor.setValue(content);
    });

    this.editor.on('change', () => {
      localStorage.setItem('content', this.editor.getValue());
      console.log('Content saved to local storage:', this.editor.getValue());
    });

    // Save the content of the editor when the editor itself is loses focus
    this.editor.on('blur', () => {
      console.log('The editor has lost focus');
      putDb({ value: localStorage.getItem('content') });
    });
  }
}

// No matter what I do this link is breaking my code in the html
{/* <script type="text/javascript"
src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.52.2/codemirror.min.js">
</script> */}
// I have rebuilt editor.js and database.js multiple times from the starter code provided.
// This link loads with errors and it does not allow my editor to persist even when the code is being saved to the indexedDB correctly