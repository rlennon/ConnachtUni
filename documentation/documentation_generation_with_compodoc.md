| Author: Matthew Erler - L00156780 |
|-----------------------------------|

# What is Compodoc ?

Compodoc is a documentation tool for Angular applications. It generates a static documentation of your application.
# Why Use Compodoc ?

Compodoc helps Angular developers providing a clear and helpful documentation of their application.

Others developers of your team, or internet visitors for a public documentation, can easily understand the features of your application or library. 

# Installation steps:
From a command line execute: npm install -g @compodoc/compodoc

Add the following "compodoc" sctipt to the "scripts" section of the Angular project's package.json file:
"scripts": {
  "compodoc": "npx compodoc -p src/tsconfig.app.json"
}

In a terminal window navigate to the folder that contains the file tsconfig.json and execute the command compodoc src -p tsconfig.json
This will generate application documentation in a folder called 'documentation'.

Start the compodoc server by executing the following command: compodoc -s

Open a browser and navigate to http://localhost:8080 application documentaion should appear.
