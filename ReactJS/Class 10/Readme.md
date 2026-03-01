# Redux Toolkit – Guide (Step by Step)

## Introduction

We learned **Redux Toolkit** step by step to manage **global state** in a React application.

We learned:

* What is Redux Toolkit
* Why we use Redux
* How to create **store.js**
* How to create **slice**
* How to connect Redux with components
* How to add **functionalities** (add, update, delete)

---

## What is Redux Toolkit? (In Simple Words)

Redux Toolkit is a **state management library** for React.

In simple words:

> **Redux helps us store and manage data that is shared between multiple components.**

Example:

* User login data
* Cart items
* Theme (dark / light)
* Todo list

---

## Why Do We Use Redux?

We use Redux when:

* Many components need the same data
* Passing props becomes difficult
* We want **central data storage**

---

# Step-by-Step Setup

## Step 1: Install Redux Toolkit

```bash
npm install @reduxjs/toolkit react-redux
```

---

## Step 2: Create store.js

Create a folder: `src/redux`

Inside it, create a file: `store.js`

```js
import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoSlice'

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
```

This file creates the **main Redux store**.

---

## Step 3: Wrap App with Provider

In `main.jsx`, wrap your App with **Provider**.

```jsx
import { Provider } from 'react-redux'
import { store } from './redux/store'

<Provider store={store}>
  <App />
</Provider>
```

Now Redux is connected to the whole app.

---

## Step 4: Create Slice (State + Reducers)

Create file: `src/redux/todoSlice.js`

```js
import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload)
    },
    deleteTodo: (state, action) => {
      state.todos.splice(action.payload, 1)
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer
```

This slice contains:

* State
* Functions (reducers)

---

## Step 5: Use Redux in Components

Now we connect Redux with React components.

### Getting Data (useSelector)

```jsx
import { useSelector } from 'react-redux'

const todos = useSelector((state) => state.todo.todos)
```

This helps us **get data from store**.

---

### Sending Data (useDispatch)

```jsx
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todoSlice'

const dispatch = useDispatch();

dispatch(addTodo("Learn Redux"));
```

This helps us **send data to store**.

---

# Step 6: Add Functionalities (Todo Example)

## Add Todo

```jsx
const addTask = () => {
  dispatch(addTodo(input))
}
```

---

## Display Todos

```jsx
{todos.map((item, index) => (
  <li key={index}>{item}</li>
))}
```

---

## Delete Todo

```jsx
<button onClick={() => dispatch(deleteTodo(index))}>Delete</button>
```

---

# Complete Flow in Simple Words

1. **store.js** → Main data store
2. **slice** → State + functions
3. **Provider** → Connect Redux with React
4. **useSelector** → Get data
5. **useDispatch** → Send data
6. **Components** → UI + functionalities

---

## What Students Should Remember

* Redux is used for global state
* Redux Toolkit makes Redux easy
* Store is the main container
* Slice contains state and logic
* Components connect using hooks

---

## Practice Task 📝

1. Create Redux store
2. Create counter slice
3. Add increment & decrement
4. Connect with React component


Happy Coding 😊
