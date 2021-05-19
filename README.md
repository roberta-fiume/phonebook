# Vue Phonebook Test

## Intro

This is a very simple Vue app that allows you to filter and view peoples contact details. All the data for the contacts is currently hardcoded on the clientside.

## Setup

- You may need to be using Node 12+
- Install with `npm install`.
- You can run the server with `npm run start-server`.
- You can run the app with `npm run serve`.
- Run tests with `npm run test:unit`.

## Task

1. Update the app to make an API request to retrieve the contacts instead of using ones hardcoded on the client.
2. Show a loading spinner while the request is in progress.
3. Handle request errors and show an appropriate error message.

The task should take 1-2 hours. If you aren't able to complete everything in time please focus on maintaining high quality for what you have added.

### What we'll be looking for

- What you think "good" looks like. Your code should be clean and at a standard where you would be happy to merge to master in a real project.
- The tests should be green and cover functionality added in a maintable way
- Pragmatism: keep things simple and don't try to show off by using clever patterns or new features where they aren't needed.

### Dev notes

Please don't spend extra time adding polish or improving tooling. Just do what you need to cleanly and efficiently meet the requirements and verify them within the existing suite of tests.

The code style in this repo may not represent current best practices in all areas. Don't worry too much about updating pre-existing code, but feel free to rework if it helps with your solution.

#### Submitting the test

There is a git repo in this directory. Please commit your changes.

Before you zip and return the test please delete the `node_modules` directory to save space.
‌

#### API

The API is accessible at http://localhost:8080/contacts (proxied from port 5000 to avoid CORS issues) and requires a "term" query parameter to be provided to filter the returned results.

#### Loading and error states

For the loading state there's an image you can use at `public/loading.gif`

One error message for all error scenarios, e.g. "Oops, something went wrong!", would be fine.

#### Testing

There are component tests written with Vue Test Utils, these should be updated to handle changes to an asynchronous request and to test the error and loading scenarios.

All other existing tests should be passing or removed if not relevant.
