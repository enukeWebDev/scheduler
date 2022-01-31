# Interview Scheduler

Using the latest tools and techniques, we build and test a React application that allows users to book and cancel interviews. 

This project implemented the stretch exercise using reducers with react and updating spots remaining with reducers.

Screenshots of the App:

!["The Overview of the App"](https://github.com/enukeWebDev/scheduler/blob/master/docs/App.png?raw=true)

!["Edit"](https://github.com/enukeWebDev/scheduler/blob/master/docs/Edit.png?raw=true)

!["Warning message when no interviewer is selected"](https://github.com/enukeWebDev/scheduler/blob/master/docs/NoInterviewerSelected.png?raw=true)

A short GIF clip of the App:

Delete - <a href="https://imgflip.com/gif/62yg4u">via Imgflip</a> <br />
Add - <a href="https://imgflip.com/gif/62yh95">via Imgflip</a>
    - <a href="https://imgflip.com/gif/62yiqz">via Imgflip</a> <br />
Edit - <a href="https://imgflip.com/gif/62yifx">via Imgflip</a>




Functional Requirements:

Development focuses on a single page application (SPA) called Interview Scheduler, built using React.
Data is persisted by the API server using a PostgreSQL database.
The client application communicates with an API server over HTTP, using the JSON format.
Jest tests are used through the development of the project.

Stack:

- React
- Javascript
- Babel
- Axios
- Storybook
- Webpack Dev Server
- Jest Testing Library
- Cypress

Dependencies:

- axios
- classnames
- cypress
- react
- react-dom
- react-scripts


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
