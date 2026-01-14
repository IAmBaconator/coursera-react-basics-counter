# coursera-react-basics-counter
A demo of a simple counter application that demonstrates how React useState hook handles basic user interactions through an event handler.
## Goal
The goal of this lab is to build a React application that provides the user with buttons that allow the user to increase or decrease a counter through a useState hook.
# Lab Notes
Command to create a _(this)_ React app, `npx create-react-app counter_app` and start the browser preview of the app, `npm start`. Note: The create-react-app command is deprecated.
## useState Hook Explaination
* The `useState` hook is used to declare state i functional components.  In this case, the _num_ state variable is used to hold the current number, and _setNum_ is the function that updates this number.
* initially, _num_ is set to `0` (useState(0)).
## Button Explaination
* Two buttons: _"Add 1"_ and _"Subtract 1"_.
* When the _"Add 1"_ button is clicked, the value of _num_ is increased by `1`. This is achieved by calling `setNum(num + 1)`.
* When the _"Subtract 1"_ button is clicked, the value of _num_ is decreased by `1`. This is achieved by calling `setNum(num - 1)`.
## JSX Structure Explaination
* The app is wrapped inside a `<div>` with a class name _app-container_ for styling.
* The value of _num_ is displayed inside an `<h1>` tag.
* The two buttons are inside a `<div>` with a class _button-container_ for styling.