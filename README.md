# Quest Hub web application

> A modern platform for discovering, following, and viewing information about video games. It includes a wishlist section and filters by category and developer.

## Tech Stack

| Category             | Technology                          |
| -------------------- | ----------------------------------- |
| **Framework**        | React 19 + Vite 7                   |
| **Language**         | JavaScript (ES2026) + JSX           |
| **Routing**          | React Router 7.15.0                 |
| **UI Framework**     | TailwindCSS                         |

## Prerequisites

- **Node.js** 22+
- **Git** for version control

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start development server**

   ```bash
   npm run dev
   ```

   Server runs at `http://localhost:5173`

### Project Structure

```
src/
├── app/
│   ├── developer/       
│   ├── game/            
│   ├── home/            
│   ├── login/           
│   └── wish-list/       
├── assets/              # Images and SVGs
├── common/              # Componentes compartidos
│   ├── footer/          
│   └── header/          
├── components/          # Reusable UI components
├── features/            # Logic of independent features
│   └── auth/            # Authentication
├── hooks/               # Custom hooks
├── pages/               
├── router/              # Router Configuration
├── services/            # API Calls
├── skeletons/           # Skeletons for the loading UI
├── app.jsx
├── main.jsx
└── index.css
```

### Commit Convention

```
feat: add feature
fix: fix bug
docs: documentation
style: formatting
refactor: code refactoring
test: add tests
chore: dependencies
```

## DEMO
Prueba la aplicación en vivo: [https://questhub-app.netlify.app/](https://questhub-app.netlify.app/)


### USER DEMO
> These credentials are for testing purposes only.
```
user: donero
password: ewedon
````

