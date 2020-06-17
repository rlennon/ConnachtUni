**
Assuming that we are using Angular CLI.


The Angular CLI downloads and installs everything needed to test an Angular application with the Jasmine test framework. Jasmine is a behavior-driven development framework for testing JavaScript code. It does not depend on any other JavaScript frameworks. It does not require a DOM. And it has a clean, obvious syntax so that you can easily write tests.

The project you create with the CLI is immediately ready to test. Just run the ng test CLI command:

The ng test command builds the app in watch mode, and launches the Karma test runner. Karma is essentially a tool which spawns a web server that executes source code against test code for each of the browsers connected. The results of each test against each browser are examined and displayed via the command line to the developer such that they can see which browsers and tests passed or failed.

A browser can be captured either

	• manually, by visiting the URL where the Karma server is listening (typically http://localhost:9876/),
	• or automatically by letting Karma know which browsers to start when Karma is run (see browsers).
  
Karma also watches all the files, specified within the configuration file, and whenever any file changes, it triggers the test run by sending a signal to the testing server to inform all of the captured browsers to run the test code again. Each browser then loads the source files inside an IFrame, executes the tests and reports the results back to the server.
The server collects the results from all of the captured browsers and presents them to the developer.


The last line of the log shows that Karma ran three tests that all passed.
A chrome browser also opens and displays the test output in the "Jasmine HTML Reporter".

Most people find the browser output easier to read than the console log. You can click on a test row to re-run just that test or click on a description to re-run the tests in the selected test group ("test suite").
Meanwhile, the ng test command is watching for changes.

**
If we are using Angular CLI, then we should use the testing tool that comes with the tool.


References

Angular (2020). Angular Testing. Retrieved from https://angular.io/guide/testing

Jasmine (N. D.). Jasmine Behavior-Driven JavaScript. Retrieved from https://jasmine.github.io/

Karma (N.D.).  Karma. Retrieved from https://karma-runner.github.io/5.0/intro/how-it-works.html

