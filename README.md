# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by improperly managing dependencies.  The `bug.js` file contains the erroneous code. The solution is provided in `bugSolution.js`.

## Bug Description
The `useEffect` hook, when used with a dependency array that includes the state variable it modifies, can cause an infinite loop.  This occurs because every update of the state variable triggers a re-render, which in turn re-executes the `useEffect`, further updating the state, and so on.