# Bench Routes Dashboard

Bench routes dashboard is a user interface to access, visualize and introspect data curated by [bench-routes](https://github.com/bench-routes/bench-routes.git). This files explains how to setup and work with Bench Routes Dashboard.

## Introduction

Bench Routes Dashboard was bootstrapped using [Create React App](https://github.com/facebook/create-react-app), a popular toolkit for generating React application setups. You can find general information about Create React App on [their documentation site](https://create-react-app.dev/).

Instead of plain JavaScript, we use [TypeScript](https://www.typescriptlang.org/) to ensure typed code.

## Development environment

To work with the React UI code, you will need to have the following tools installed:

- The [Node.js](https://nodejs.org/) JavaScript runtime.
- The [Yarn](https://yarnpkg.com/) package manager.
- _Recommended:_ An editor with TypeScript, React, and [ESLint](https://eslint.org/) linting support. See e.g. [Create React App's editor setup instructions](https://create-react-app.dev/docs/setting-up-your-editor/).Please ensure that [the editor uses the project's TypeScript version rather than its own](https://code.visualstudio.com/docs/typescript/typescript-compiling#_using-the-workspace-version-of-typescript).

## Cloning the repository

You can clone this repository by running:

```
git clone https://github.com/bench-routes/dashboard.git
```

## Installing npm dependencies

To get started with the project, you will need to install some dependencies via the yarn package manager as follows:

```
    yarn
```

Yarn consults the `package.json` and `yarn.lock` files for dependencies to install. It creates a `node_modules` directory with all installed dependencies.

**NOTE**: Remember to change directory to `dashboard` before running this command and the following commands.

## Running a local development server

You can start a development server for the Dashboard by running:

```
    yarn start
```

This will open a browser window with the React app running on http://localhost:3000/ in "watch" mode i.e. the web server will reload if you make edits to the source code and you will also see any linting errors in the console.

## Running tests

Create React App uses the [Jest](https://jestjs.io/) framework for running tests. To run tests in interactive watch mode:

```
    yarn test
```

## Linting

We define linting rules for the [ESLint](https://eslint.org/) linter. We recommend integrating automated linting and fixing into your editor (e.g. upon save), but you can also run the linter separately from the command-line.

To detect and automatically fix lint errors, run:

```
    yarn lint
```
