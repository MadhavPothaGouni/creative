# Creative Upaay Dashboard

A **React.js** Kanban-style task management dashboard built to replicate the provided Figma design.  
This project includes core task management features, drag-and-drop, search functionality, and persistent state using Redux + Local Storage.

---

## Features

- **Pixel-perfect UI**: Follows Figma design closely using Tailwind CSS.
- **Kanban Board**: Tasks are organized into columns:
  - To Do
  - On Progress
  - Done
- **Add Tasks**: Create new tasks with title, description, status, and priority.
- **Drag-and-Drop**: Move tasks between columns using `react-beautiful-dnd`.
- **Search**: Filter tasks by title or description in real-time.
- **Persistent State**: Tasks are stored in Redux and saved to Local Storage.
- **Responsive Design**: Works well on desktop and tablet screens.

---

## 🛠 Technologies Used

- **React.js** – Component-based UI library
- **Redux Toolkit** – State management
- **Tailwind CSS** – Utility-first styling for fast, pixel-perfect design
- **react-beautiful-dnd** – Drag-and-drop functionality
- **Local Storage** – Persistent task data
- **Heroicons** – UI icons

---

## Project Structure

creative-upaay-dashboard/
│
├── src/
│ ├── components/ # Reusable components (Sidebar, Navbar, Column, TaskCard, AddTaskModal)
│ ├── pages/ # Page-level components (Dashboard)
│ ├── redux/ # Redux store and slices
│ ├── utils/ # Helper functions (localStorage)
│ ├── styles/ # Tailwind CSS configs
│ ├── App.jsx
│ └── index.js
├── tailwind.config.js # Tailwind configuration
├── package.json
└── README.md

yaml
Copy code

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/MadhavPothaGouni/creative
cd creative-upaay-dashboard
2. Install dependencies
bash
Copy code
npm install
3. Start the development server
bash
Copy code
npm start

Usage
Click Add Task (+) in any column to add a new task.

Drag tasks between columns to update their status.

Use the search bar to filter tasks by title or description.

Filter and Today buttons are UI placeholders (can be extended in the future).

Live Demo

https://creative-green-one.vercel.app/

Notes
Tasks are stored in Redux state and saved to Local Storage, so refreshing the page will preserve tasks.

Priority colors:

Low → Yellow

High → Red

Completed → Green

Design Reference
Figma Link: Creative Upaay Dashboard Design 

License
This project is for educational purposes and personal use.

yaml
Copy code

---
