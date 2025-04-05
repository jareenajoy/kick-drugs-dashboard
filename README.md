<<<<<<< HEAD
# kick-drugs-dashboard
=======
# 1 React + Vite

# 2 Kick Drugs Dashboard

A responsive and interactive dashboard built with React, Redux Toolkit, React Bootstrap, and Recharts.

# 3 Folder structure

kick-drugs-dashboard/
│
├── public/
├── src/
│   ├── assets/              # Static images used in dashboard
│   ├── components/          # Sidebar, Header, StatsSection, StatsCard
│   ├── pages/               # Dashboard and Analytics pages
│   ├── redux/               # Redux store & statsSlice
│   ├── services/            # API file (fetchUsers)
│   ├── App.jsx              # App routing and layout
│   ├── main.jsx             # React root, Provider & Router setup
│   └── Sidebar.css            # Custom styles
│
├── package.json
└── README.md

# 4  Tech Stack

React

Redux Toolkit

React Router DOM v6

React Bootstrap

Recharts.js

JavaScript (ES6+)

Bootsrap

# 4 Features

Sticky Sidebar and Responsive Header

Dynamic Statistics with real-time mock API integration

District-wise bar charts (This Year / Last Year switch)

Gender distribution pie chart per district

Reusable components for stats display

Redux-powered global state management

Bootstrap for responsive layout


# 5
git clone https://github.com/yourusername/kick-drugs-dashboard.git
cd kick-drugs-dashboard

Install dependencies

bash
npm install
npm run dev
Open in browser
http://localhost:5173

# 6 Data Source
Mock user data is fetched using a utility in /services/api.js. Based on that:

Total users are categorized into individuals, organizations, men, and women

Week-over-week growth is simulated using randomized calculations.


# 7 Pages Overview

/ - Dashboard

Shows dynamic statistics


/analytics - Analytics

Bar chart comparing districts (year-based)

Gender distribution per district (Pie chart)

Shared statistics cards using Redux data


>>>>>>> 9d86557 (Initial commit for Kick Drugs Dashboard)
