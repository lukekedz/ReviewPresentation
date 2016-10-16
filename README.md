# Review Presentation
Source code for the Code Camp Presentation: Testable, ES2015, AngularJS 1.5.x Component based Applications.

The below image pictures the review of a session.  The GradeComponent provides UI for grading the question.

<img src="https://github.com/Oceanware/ReviewPresentation/blob/master/Art/ScreenShot.png" width="500"/>

## Prerequisites
Before you can run this code locally on your system, you'll need to load the following software:

- Install node.js:  https://nodejs.org/en/  (**Mac users install using "brew"** not the download from node web site.)

- Install JSPM globally
```shell
npm install -g jspm
```

## Running The App and Unit Tests

- Download or clone this repo.

- Open a terminal window at the root folder and run the following commands:
```shell
npm install
```

**Windows User Please Note:** during testing, one time I had to run 'npm install' twice to get around a package install error.

- Run the mocha unit tests
```shell
npm run mocha
```

- Continuously run mocha unit tests as files are changed and saved
```shell
npm run watch
```

- Run the mocha unit tests and Istanbul code coverage
```shell
npm run coverage
```

- Run the website
```shell
npm run start
```

- Run ES6 and HTML linters
```shell
gulp
```

- Continuously run ES6 and HTML linters
```shell
gulp watch
```

This application has an in-memory database; each time the browser is opened, a fresh database is loaded. Additionally,  refreshing the browser will cause the AngularJS application to restart and refresh the database.

## Learning Links

- https://docs.angularjs.org/guide
- https://docs.angularjs.org/api
- http://exploringjs.com/
- https://www.pluralsight.com/courses/building-components-angular-1-5
- http://jspm.io/
- https://github.com/systemjs/systemjs
- http://blog.thoughtram.io/angularjs/2016/03/29/exploring-angular-1.5-lifecycle-hooks.html
- https://github.com/ericdouglas/ES6-Learning
- https://www.youtube.com/watch?v=A1HhhICKl2Q
