# Review Presentation
This the source code to the Code Camp Presentation: Testable, ES2015, AngularJS 1.5.x Component based Applications.

The below image pictures the review of a session.  The GradeComponent provides UI for grading the question.

<img src="https://github.com/Oceanware/ReviewPresentation/blob/master/Art/ScreenShot.png" width="500"/>

## Roadmap

- [ ] Add Karma integration tests.
- [ ] Add jspm build script to bundle and minify.
- [ ] Investiage getting istanbul to run when mocha tests are transpiled on the fly.  May have to transpile to folder.
- [ ] Add blog post about this project and unit testing.

## Prerequisites
Before you can run this code locally on your system, you'll need to load the following software:

- Install node.js:  https://nodejs.org/en/  (**Mac users install using "brew"** not the download from node web site.)

- Install JSPM globally
```shell
npm install -g jspm
```

## Run The App!

- Download or clone this repro.

- Open a terminal window at the root folder and run the following commands:
```shell
npm install
```

- Run the mocha unit tests
```shell
npm run mocha
```

- Run the website
```shell
npm run start
```

This application has an in-memory database; each time the browser is opened, a fresh database is loaded. Additionally,  refreshing the browser will cause the AngularJS application to restart and refresh the database.
