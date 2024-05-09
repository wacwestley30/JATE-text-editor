# J.A.T.E Text Editor App

[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

## Description

This is J.A.T.E a text editor web app that allows users to create notes or code snippets with or without an internet connection. It features a client-server folder structure, utilizes webpack for bundling JavaScript files, and employs IndexedDB for immediate database storage. Content entered in the text editor is automatically saved and retrieved from IndexedDB, ensuring reliability. Additionally, the application can be installed as a Progressive Web Application with a generated manifest.json.

Deployed on Render:
https://jate-text-editor-tmyc.onrender.com/

![Screenshot of running PWA](/Develop/screenshot/JATE.png)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Bugs](#bugs)
- [Questions](#questions)

## Installation

To install the application, you can easily execute the provided scripts found within the `package.json` file. Simply run `npm i`, and the script will automatically navigate through all three `package.json` files, ensuring that all dependencies required for the application are installed seamlessly.

## Usage

#### Building with Webpack

Run `npm run build` to build your `dist` folder, bundle your Javascript files, generate an HTML file, service worker, and a manifest file.

#### Running the Application

Run `npm run start` to start up both the backend and serve the client, allowing access within the browser.

### Offline Functionality

The application is designed to work seamlessly even without an internet connection. Upon opening the text editor, IndexedDB will immediately create a database storage, allowing you to enter and save content locally. Content will be automatically saved inside the text editor when the DOM window is unfocused, ensuring that your data is preserved even if the connection is lost.

### Progressive Web Application (PWA) Installation

You can install the application as a Progressive Web Application (PWA) by clicking on the "Install" button. This will download the web application as an icon on your desktop, providing easy access to the application even when you're offline.

## License

Licensed under the MIT license.

[MIT License](https://opensource.org/licenses/MIT)

## Bugs

"https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.52.2/codemirror.min.js"

### Bug Description:

When attempting to access a specific JavaScript file linked within the HTML, it triggers an error in the editor interface. Subsequently, upon refreshing or reloading the application, the editor reverts back to its default layout instead of retaining the previously saved data. Despite successful operations with IndexedDB and local storage, verified through extensive logging and experimentation with different methods not reflected in the repository, the error in the linked JavaScript file prevents the editor from accessing and utilizing the saved data.

#### Steps to Reproduce:

- Open the application.
- Observe the error triggered in the editor interface.
- Make edits to the editor while watching the devTools (IndexedDb and console.logs).
- Refresh or reload the application.
- Notice the editor defaulting back to its initial layout instead of retaining saved data.

#### Expected Behavior:

The linked JavaScript file should load without error, allowing the editor to access and utilize the saved data seamlessly even after refreshing or reloading the application.

#### Additional Notes:

Despite successful operations with IndexedDB and local storage, the error in the linked JavaScript file disrupts the functionality of the editor.
Further investigation is required to identify and resolve the root cause of the error, ensuring smooth operation of the application.

## Questions

For any questions, please contact WestleyCervantes@gmail.com. Visit [wacwestley30](https://github.com/wacwestley30) for more projects.
