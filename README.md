# Learning about React Hooks and Context API from The Net Ninja on YouTube
Learning about React Hooks and Context API from The Net Ninja on [YouTube](https://www.youtube.com/playlist?list=PL4cUxeGkcC9hNokByJilPg5g9m2APUePI)
Course files for reference can be found on GitHub from [iamshaunjp](https://github.com/iamshaunjp/react-context-hooks)

---

## Notes
### 1. Introduction
- [React Context API](https://reactjs.org/docs/context.html) allows for cleaner and easier sharing of state between components
    - as opposed to extensive prop drilling
- [React Hooks](https://reactjs.org/docs/hooks-intro.html) allow us to do more inside functional components, particularly things that could previously only be done in class components
    - for example, make use of state or use a variation of lifecycle methods
- Together, they can be used to create a *"Redux-like"* global state management without third-party library and a lot of boilerplate code

### 2. What is the Context API?
- Gives you a way to share state within a component tree without messiness of prop-drilling
- Will have a central state store to be accessed by several components
    - A common example is sharing the selected theme or preferred language for several components
- A **Context** with the state data is created in it's own file to then be shared with the component tree
    - this is done via a **Context Provider** which is simple a React tag which wraps whatever components will need to make use of it, but need not be used by all components
