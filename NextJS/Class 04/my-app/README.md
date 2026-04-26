# 📘 Next.js Learning Project -- Quotes App

This project helps students understand core concepts of Next.js (App
Router) using a Quotes App.

------------------------------------------------------------------------

## 🚀 Topics Covered

### ✅ Navbar

-   Dashboard\
-   All Quotes\
-   Contact Us\
-   About Us\
-   Used Next.js Link for navigation

------------------------------------------------------------------------

### ✅ Routing (App Router)

app/ ├── page.js ├── about/page.js ├── contact/page.js ├──
quotes/page.js └── quotes/\[id\]/page.js

-   /quotes → all quotes\
-   /quotes/1 → single quote

------------------------------------------------------------------------

### 🌐 API Used

https://dummyjson.com/quotes

------------------------------------------------------------------------

### 📌 Fetch All Quotes

const res = await fetch("https://dummyjson.com/quotes"); const data =
await res.json();

------------------------------------------------------------------------

### 📌 Fetch Single Quote

const res = await fetch(`https://dummyjson.com/quotes/${params.id}`);
const data = await res.json();

------------------------------------------------------------------------

### 🔗 Dynamic Routing

-   params.id comes from URL

------------------------------------------------------------------------

### ⏳ Loading Page

Create: app/quotes/loading.js

Example: export default function Loading() { return
```{=html}
<h1>
```
Loading...
```{=html}
</h1>
```
; }

------------------------------------------------------------------------

### ❌ Not Found Page

Create: app/not-found.js

Example: export default function NotFound() { return
```{=html}
<h1>
```
Page Not Found
```{=html}
</h1>
```
; }

------------------------------------------------------------------------

## 🎯 Learning Outcome

Students learned: - Routing - Dynamic Routing - API Fetching -
Navigation - Loading UI - Error Handling

------------------------------------------------------------------------

## 👨‍🏫 Instructor

Adil Ahmed Shekhani
