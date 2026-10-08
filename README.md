# SkillSwap

SkillSwap is a React-based web application developed as a **school
project** during the Web & Mobile Developer course. The project was
created to explore the development of a peer-to-peer skill-sharing
platform, connecting people who want to learn a skill with people who
can teach it.

The application allows users to discover skills and services, explore
user profiles, search for available services, and interact with other
users.

The project is currently under development and focuses on building the
frontend experience and integrating it with a remote mock API.

## Project Status

**Development stage:** In progress

**Project type:** School / Educational Project

The current version provides the main browsing experience, user
profiles, service pages, category navigation, search, reviews display,
login/registration UI, and a tutorial video.

Several interaction features are currently represented by UI elements
but still require their complete implementation.

## Features

### Currently implemented

-   Home page with SkillSwap introduction
-   Skill category navigation
-   Category-based service listing
-   Service/skill detail pages
-   User profile pages
-   Published services displayed on user profiles
-   Search for users and services
-   Service ratings and review display
-   Login popup
-   Login form
-   Registration form
-   User state management through React Context
-   Responsive-oriented UI built with CSS and Bootstrap
-   React Router navigation
-   Remote mock API integration
-   Reusable UI components for cards, buttons, navigation, profiles and
    login flows

### Main application routes

  Route              Description
  ------------------ ---------------------------------------
  `/`                Home page
  `/categoria/:id`   Services belonging to a category
  `/skill/:id`       Skill/service details and reviews
  `/user/:id`        User profile and published services
  `/search?q=...`    Search results for users and services
  `/skillpage`       General listing of available skills

## Tech Stack

### Frontend

-   React 19
-   Vite
-   React Router DOM
-   JavaScript / JSX
-   Bootstrap
-   CSS
-   React Context API

### Backend

-   Mock API

### Additional libraries

-   `@videojs/react` for the tutorial video player

### Development tools

-   ESLint
-   Vite development server
-   Git / GitHub

## Architecture

The project follows a component-based React structure.

``` text
src/
├── components/
│   ├── Login/
│   ├── Styles/
│   └── reusable UI components
├── contexts/
│   └── UserContext.jsx
├── layout/
│   └── BasicLayout.jsx
├── pages/
│   ├── Home.jsx
│   ├── Category.jsx
│   ├── Skill.jsx
│   ├── SearchResult.jsx
│   └── UserPage.jsx
├── SkillPage.jsx
├── App.jsx
├── main.jsx
└── index.css
```

The application uses `BasicLayout` as the main layout. It provides the
navigation bar, page content through React Router's `Outlet`, and the
footer.

`UserContext` currently manages the frontend authentication state and
the state of the login/registration interfaces.

## Data Source

The frontend currently communicates with a remote mock API through the
Vite development proxy.

The application uses endpoints such as:

``` text
/api/users
/api/users/:id
/api/services
/api/services/:id
/api/categories
/api/reviews
```

The proxy removes the `/api` prefix before forwarding requests to the
configured mock API service.

This setup is intended for development and prototyping. A
production-ready application should replace the mock API with a
dedicated backend and persistent database.

## Authentication

Authentication is currently represented by a frontend state managed
through `UserContext`.

The current authentication flow includes:

1.  Login popup
2.  Login form
3.  Registration form
4.  User state
5.  Login/logout UI state

The authentication system is not yet connected to a real authentication
backend.

## Search

The search page currently searches through the available users and
services returned by the API.

Users are matched using their username, while services are matched using
their title.

Search results are displayed in separate sections for:

-   Users
-   Services

## Reviews

Service pages currently retrieve reviews associated with the selected
service and display:

-   Reviewer username
-   Reviewer avatar
-   Rating
-   Review comment
-   Number of reviews associated with the service

Submitting new reviews is not implemented yet.

## Getting Started

### Requirements

-   Node.js
-   npm

### Installation


``` bash
git clone https://github.com/fabiogentile-gif/SkillSwap-ReactJS.git
cd SkillSwap-ReactJS
npm install
npm run dev
```

The application will be available through the local Vite development
server.


## Roadmap

The project is currently functional as a school project, but a few improvements and refinements are still planned.

### UI & UX

- [x] Implement the main responsive layout
- [x] Create reusable UI components
- [x] Add category-based navigation
- [x] Add user and service detail pages
- [ ] Improve mobile responsiveness on smaller screens
- [ ] Refine spacing and typography across the pages
- [ ] Improve consistency between cards and buttons
- [ ] Add better loading states
- [ ] Add better empty-state messages

### User Experience

- [x] Implement login and registration interfaces
- [x] Implement user profiles
- [x] Implement service search
- [x] Implement service reviews display
- [ ] Complete the favourite service interaction
- [ ] Complete the review submission interaction
- [ ] Improve form validation and error messages
- [ ] Improve navigation between services and profiles

### Content & Data

- [x] Connect the frontend to the mock API
- [x] Display users and services dynamically
- [x] Display categories and reviews
- [ ] Review and clean up mock data
- [ ] Add more example services and users
- [ ] Improve category/subcategory filtering
- [ ] Create a database environment

### Technical Improvements

- [x] Set up React Router
- [x] Set up React Context for user state
- [x] Configure Vite API proxy
- [ ] Refactor duplicated API requests
- [ ] Improve component organization
- [ ] Clean up unused imports and components
- [ ] Improve error handling for failed API requests

### Final Polish

- [ ] Review the application on different screen sizes
- [ ] Fix remaining visual bugs
- [ ] Replace temporary placeholder content
- [ ] Improve accessibility where possible
- [ ] Final code cleanup
- [ ] Update project documentation

## Known Development Limitations

The current project is still a prototype, therefore some controls are
visual placeholders rather than complete features.

Examples include:

-   Starting a chat
-   Adding a service to favourites
-   Submitting a review
-   Creating and managing services
-   Skill exchange requests
-   Persistent authentication

The application also relies on a remote mock API, so availability and
data persistence depend on that external service.

## Future Direction

The long-term goal is to turn SkillSwap into a complete peer-to-peer
skill exchange platform.

A possible final user flow is:

``` text
Register
   ↓
Complete profile
   ↓
Add skills you can teach
   ↓
Browse skills you want to learn
   ↓
Find a compatible Swapper
   ↓
Send exchange request
   ↓
Accept request
   ↓
Chat / arrange exchange
   ↓
Complete skill exchange
   ↓
Leave a review
```

## Learning Goals

This project was developed as a practical school project to strengthen
knowledge of:

-   React components
-   React Hooks
-   Context API
-   React Router
-   API requests with `fetch`
-   Asynchronous JavaScript
-   State management
-   Reusable components
-   Form handling
-   Frontend routing
-   CSS and responsive layouts
-   Integration with external APIs
-   Git and GitHub workflow

## Authors

**Fabio Gentile**\
**Flavio Ricci**

This project was developed collaboratively as part of an educational assignment.

## License

This project is currently intended primarily as a learning and portfolio project.
