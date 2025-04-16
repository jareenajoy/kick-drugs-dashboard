# 1 React + Vite 
# 2 Kick Drugs Dashboard – Role-Based Access Control

This is a React dashboard application demonstrating a role-based access and permission system built for an interview task. It features two types of users with login functionality and dynamic access control based on their roles.

# 3 Folder structure

kick-drugs-dashboard/
│
├── public/
├── src/
│   ├── assets/              # Static images used in dashboard
│   ├── components/          # Sidebar, Header, StatsSection, StatsCard,AccessDenied,ProtectedRoute
│   ├── pages/               # Dashboard, Analytics and AccessDenied pages
│   ├── data/                # users
│   ├── redux/               # Redux store,authSlice & statsSlice
│   ├── services/            # API file (fetchUsers)
│   ├── App.jsx              # App routing and layout
│   ├── main.jsx             # React root, Provider & Router setup
│   └── Sidebar.css            # Custom styles
│
├── package.json
└── README.md

## Dummy Login Credentials

| Role	             | Username	     | Password	    |Access
| Super Admin        | superadmin	 | super123		- Full access to Dashboard and Analytics
| Regional Admin (1) | regional1	 | reg123	  	- Access to Analytics only
| Regional Admin (2) | regional2	 | reg123	   	- No access to Status section in Analytics

# 4  Tech Stack

React

Redux Toolkit

React Router DOM v6

React Bootstrap

Recharts.js

JavaScript (ES6+)

Bootsrap

# 4 Features

Login System with dummy users

Super Admin: Full access to all pages (Dashboard, Analytics)

Regional Admin: Access to Analytics page only

Conditional access: One Regional Admin has limited permissions

Charts and Statistics: Gender & District-based visualizations

Route-level and component-level access restriction

Logout system with route redirect


# 5
git clone https://github.com/yourusername/kick-drugs-dashboard.git
cd kick-drugs-dashboard

Install dependencies

bash
npm install
npm run dev
Open in browser


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


