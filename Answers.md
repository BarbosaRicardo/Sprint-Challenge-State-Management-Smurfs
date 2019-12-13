1. What problem does the context API help solve?

Context API is a component created by the React framework, which enables sharing of specific forms of data across all levels of the application to solve the problem of prop drilling, having to write prop passing from component to component unti it because tedious, non DRY.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

What a single source of truth is a massive Javascript object created in 'store' in redux. Reducers reduce the repetitve props passing in React, though redux is not react specific and uses context API under the hood. Actions dispatch data to store.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the state that redux is managing whereas component state is referring to this.setState or a hook in React. 
Application state is the whole thing, but sub components may not have access to the entire application state while shared state is always accessible, in redux for example.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk is middleware. It lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed. The most common way in which it's used is to handle promises and complex asynchronous logic, this usage often results in the duplication code between action creators.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I prefer redux because of it's industry appeal even though conceptually more difficult than context. 
