# 📘 Next.js Routing – Beginner Guide

## 🚀 Introduction

In today’s class, we started learning **Next.js** and focused on one of its most powerful features: **Routing**.

Routing means **how users move from one page to another** in a website.

In Next.js, routing is **automatic** — you don’t need to install extra libraries like React Router.

---

## 📂 File-Based Routing (Main Concept)

Next.js uses **file-based routing**.

👉 This means:

- Every file inside the `pages` (or `app`) folder becomes a **route (URL)**.

### Example:

```
pages/
 ├── index.js
 ├── about.js
 ├── blog.js
 └── contact.js
```

Then your routes will be:

- `/` → Home page (`index.js`)
- `/about` → About page
- `/blog` → Blog page
- `/contact` → Contact page

---

## 🏠 Home Page (index.js)

The `index.js` file is the **main (home) page**.

```js
export default function Home() {
  return <h1>Welcome to Home Page</h1>;
}
```

---

## 🔗 Navigation Between Pages

To move between pages, we use **Link component**.

```js
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>

      <Link href="/about">About</Link>
      <br />
      <Link href="/blog">Blog</Link>
      <br />
      <Link href="/contact">Contact</Link>
    </>
  );
}
```

👉 This helps users navigate without refreshing the page.

---

## 📁 Nested Routing (Page inside Page)

You also learned how to create a **page inside another folder**.

### Example:

```
pages/
 ├── blog/
 │    ├── index.js
 │    └── post.js
```

### Routes will be:

- `/blog` → Blog main page
- `/blog/post` → Blog post page

---

## 🧠 Key Points to Remember

✔ No need for React Router  
✔ File name = Route name  
✔ `index.js` = default page of folder  
✔ Folders create nested routes  
✔ Use `Link` for navigation

---

## 📌 Simple Real-Life Example

Think of it like this:

- Website = School 🏫
- Pages = Classrooms
- Routes = Classroom doors 🚪

Each file creates a new “door” (URL) to enter that page.

---

## 🎯 What You Practiced Today

✅ Created Home Page  
✅ Created About, Blog, Contact Pages  
✅ Navigated between pages  
✅ Created nested (inner) pages

---

## 🔥 Next Step

In upcoming classes, we will learn:

- Dynamic Routing
- Layouts
- Components reuse
- API routes

---

## 💡 Final Tip

Keep practicing by:

- Creating more pages
- Adding links between them
- Making small mini websites
