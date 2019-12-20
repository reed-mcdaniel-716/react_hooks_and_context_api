# Learning about React Hooks and Context API from The Net Ninja on YouTube
Learning about React Hooks and Context API from The Net Ninja on [YouTube](https://www.youtube.com/playlist?list=PL4cUxeGkcC9hNokByJilPg5g9m2APUePI)
Course files for reference can be found on GitHub from [iamshaunjp](https://github.com/iamshaunjp/react-context-hooks)

---

## Layout
This repo is split into three separate React applications
1. **contextapp** for React Context API work both with and without Hooks
2. **hooksapp** for React Hooks
3. **booklist** for a more complex application using React Context API and Hooks
---

## Notes
### 1. Introduction
- [React Context API](https://reactjs.org/docs/context.html) allows for cleaner and easier sharing of state between components
    - as opposed to extensive prop drilling
- [React Hooks](https://reactjs.org/docs/hooks-intro.html) allow us to do more inside functional components, particularly things that could previously only be done in class components
    - for example, make use of state or use a variation of lifecycle methods
- Together, they can be used to create a *"Redux-like"* global state management without a third-party library and a lot of boilerplate code

### 2. What is the Context API?
- Gives you a way to share state within a component tree without messiness of prop-drilling
- Will have a central state store to be accessed by several components
    - A common example is sharing the selected theme or preferred language for several components
- A **Context** with the state data is created in it's own file to then be shared with the component tree
    - this is done via a **Context Provider** which is simple a React tag which wraps whatever components will need to make use of it, but need not be used by all components
### 9. Intro to Hooks
- Hooks are essentially just special functions
- They allow you to do things in functional components that you would usually only be able to do in class components
    - for example, using state
- There are several predefined React Hooks that do different things
    - `useState()`: allows us to use state in functional components
    - `useEffect()`: allows us to run code whenever a component renders (or re-renders) similar to a lifecycle method in a class component
    - `useContext()`: allows us to consume context in a functional component
- **Hook Rules**:
    - **Only Call Hooks at the Top Level: Don’t call Hooks inside loops, conditions, or nested functions.**
    - **Only Call Hooks from React Functions: Don’t call Hooks from regular JavaScript functions.**
### 19. Reducers, Actions, and State
- **Reducers** are essentially just a coding pattern which centralizes all of our methods for changing state into a single function
    - For example, the `addBook()` and `removeBook()` functions of the `BookContext` both operate on the same state. As things become more complex, and perhaps more functions are added to operate on the state of `BookContext`, it make make sense to consolidate.
    - **Reducers** are completely optional but can be very helpful
- Aspects of **Reducers**
    1. **Reducer function**: a function which contains all of the state manipulation logic for interacting with the state and changing the data
        - they take the state of the data to be manipulated ass well as an **action object** as parameters
        - how it works: *check action.type -> update the state object -> return the state object -> new state passed into Provider `value`*
    2. **Action object**: an object defining the type of change we want to make inside the reducer function
        - It may also have an additional properties for data that needs to be transmitted with it (often referred to as a ***payload***)
    3. **Dispatch function**: a function which sends the action to the reducer i.e. takes the action object as a parameter

### 21. Adding Local Storage
- **Local Storage** allows you to persist data through page refreshes by saving the data in a user's browser
- Can check **Local Storage** in the browser (*inspect -> storage -> local storage*)
    - stores data in key-value pairs, where the value must be a string
- To see what is in **Local Storage** go to the console and type `localStorage` and then hit enter
    - under the `<prototype>` key you can see the available methods
    - will be using the `setItem()` and `getItem()` functions (test it out in the console)
- To save objects to **Local Storage** you must first apply the `JSON.stringify()` function as values may only be strings
- To get the object back from the string use `JSON.parse()`
