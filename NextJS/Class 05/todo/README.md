#  Next.js API & Data Rendering

A simple full-stack exercise built with **Next.js** to demonstrate how
to create an API route and render its data on the frontend.

##  Overview

This project showcases a basic implementation of:

-   Building a **GET API endpoint** using Next.js App Router
-   Structuring and returning JSON data
-   Fetching API data on the client side
-   Dynamically rendering data using React

The goal was to understand how backend and frontend logic work together
within a single Next.js application.

------------------------------------------------------------------------

##  Features

-   Custom API route (`/api/tasks`)
-   Static dataset returned from the API
-   Client-side data fetching using `fetch`
-   Dynamic UI rendering with `.map()`
-   Clean and minimal project structure

------------------------------------------------------------------------

##   Implementation Details

### API Route

``` js
export async function GET() {
  const tasks = ["Task 1", "Task 2", "Task 3"];
  return Response.json(tasks);
}
```

------------------------------------------------------------------------

### Data Fetching

``` js
const res = await fetch("/api/tasks");
const data = await res.json();
```

------------------------------------------------------------------------

### Rendering

``` js
<ul>
  {data.map((task, index) => (
    <li key={index}>{task}</li>
  ))}
</ul>
```

------------------------------------------------------------------------

##  Project Structure

    app/
    â”œâ”€â”€ api/
    â”‚   â””â”€â”€ tasks/
    â”‚       â””â”€â”€ route.js
    â”œâ”€â”€ page.js

------------------------------------------------------------------------

##  Getting Started

``` bash
npm install
npm run dev
```

------------------------------------------------------------------------

##  Learning Outcome

-   Creating API routes in Next.js
-   Handling frontend + backend together
-   Rendering dynamic data

------------------------------------------------------------------------

## Future Improvements

-   Add loading and error states
-   Connect database
-   Add CRUD functionality

------------------------------------------------------------------------

##  License

This project is open-source and for learning purposes.
