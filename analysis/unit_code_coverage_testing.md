# Unit Testing and Code Coverage
Angular comes with "built-in" tools for doing unit testing and code coverage. Specifically, it uses the following tools:
- [Jasmine](https://jasmine.github.io/) - framework for testing javascript code
- [Istanbul](https://github.com/istanbuljs) - test coverage
- [Karma](http://karma-runner.github.io/latest/index.html) - test runner

These tools are standard and there's no need to look for other options for our purposes.

In order to add/modify test cases, you would modify the ".spec.ts" file for the given component. For example, the default installation of Angular comes with an App Component. The App component is made up of the app.component.ts, app.component.html, and others - the test cases are created in the file called app.component.spec.ts.

## Running the Unit Test
In order to run the unit test, run the following command in the command line interface:

```
ng test
```

This will start running the tests and displaying the results in the CLI. Additionally, it'll open a browser and show the results there as well.

Here's some sample output from running this command:

```
$ ng test
07 06 2020 16:34:05.181:WARN [karma]: No captured browser, open http://localhost:9876/
07 06 2020 16:34:05.187:INFO [karma-server]: Karma v5.0.9 server started at http://0.0.0.0:9876/
07 06 2020 16:34:05.188:INFO [launcher]: Launching browsers Chrome with concurrency unlimited
07 06 2020 16:34:05.192:INFO [launcher]: Starting browser Chrome
07 06 2020 16:34:12.036:WARN [karma]: No captured browser, open http://localhost:9876/
07 06 2020 16:34:12.665:INFO [Chrome 83.0.4103.61 (Windows 10)]: Connected on socket baXniiCudjvjqr6xAAAA with id 51868163
Chrome 83.0.4103.61 (Windows 10): Executed 3 of 3 SUCCESS (0.376 secs / 0.266 secs)
TOTAL: 3 SUCCESS
TOTAL: 3 SUCCESS
```


## Running the Code Coverage test
To run the test coverage test, you would add "--code-coverage" to the unit test command.

```
ng test --code-coverage
```

This will generate a report at the end of the unit test that includes the test coverage details. Additionally, the report also generates an HTML report which is available by opening the index.html file under the "coverage" directory.

Below is output of running the code coverage tool. It breaks down the coverage by Statements, Branches, Functions and Lines. The index.html has this info as well but it's a bit more intuitive and you can click into the specific sections that are being tested in the code.

```
$ ng test --code-coverage
07 06 2020 16:51:20.882:WARN [karma]: No captured browser, open http://localhost:9876/
07 06 2020 16:51:20.893:INFO [karma-server]: Karma v5.0.9 server started at http://0.0.0.0:9876/
07 06 2020 16:51:20.894:INFO [launcher]: Launching browsers Chrome with concurrency unlimited
07 06 2020 16:51:20.900:INFO [launcher]: Starting browser Chrome
07 06 2020 16:51:28.926:WARN [karma]: No captured browser, open http://localhost:9876/
07 06 2020 16:51:29.524:INFO [Chrome 83.0.4103.61 (Windows 10)]: Connected on socket 0Rlp07HCw_WgbkAtAAAA with id 59236337
Chrome 83.0.4103.61 (Windows 10): Executed 4 of 4 SUCCESS (0.491 secs / 0.334 secs)
TOTAL: 4 SUCCESS
TOTAL: 4 SUCCESS
TOTAL: 4 SUCCESS

=============================== Coverage summary ===============================
Statements   : 100% ( 6/6 )
Branches     : 100% ( 0/0 )
Functions    : 100% ( 1/1 )
Lines        : 100% ( 5/5 )
================================================================================
```

The following references were used:
- https://angular.io/guide/testing
- https://jasmine.github.io/
- https://angular.io/tutorial/toh-pt0

- https://medium.com/@manivel45/angular-7-unit-testing-code-coverage-5c7a238315b6

- https://medium.com/razroo/coverage-reporting-in-angular-8cae30dae2e4
- https://dzone.com/articles/code-coverage-jasmine-tests#:~:text=The%20actual%20code%20coverage%20of,is%20via%20Istanbul%20and%20Karma.


