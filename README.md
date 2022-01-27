# Interview Scheduler

Using the latest tools and techniques, we build and test a React application that allows users to book and cancel interviews. 

This project implemented the stretch exercise using reducers with react and updating spots remaining with reducers.

Screenshots of the App:

!["The Overview of the App"](https://github.com/enukeWebDev/scheduler/blob/master/docs/App.png?raw=true)

!["The Jest Test"](https://github.com/enukeWebDev/scheduler/blob/master/docs/JestTest.png?raw=true)

!["Warning message when no interviewer is selected"](https://github.com/enukeWebDev/scheduler/blob/master/docs/NoInterviewerSelected.png?raw=true)

A short gif clip of the App:

<div style="width:360px;max-width:100%;"><div style="height:0;padding-bottom:56.11%;position:relative;"><iframe width="360" height="202" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameBorder="0" src="https://imgflip.com/embed/62yg4u"></iframe></div><p><a href="https://imgflip.com/gif/62yg4u">via Imgflip</a></p></div>


Functional Requirements:

Development focuses on a single page application (SPA) called Interview Scheduler, built using React.
Data is persisted by the API server using a PostgreSQL database.
The client application communicates with an API server over HTTP, using the JSON format.
Jest tests are used through the development of the project.

Technical Specifications:

React
Webpack, Babel
Axios, WebSockets
Axios
Storybook, Webpack Dev Server, Jest, Testing Library, Cypress

The Scheduler client application created using Create React App. Express is the basis for the Scheduler API server application.

Both servers run concurrently; requests are proxied from the Webpack development server to the API server.

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
