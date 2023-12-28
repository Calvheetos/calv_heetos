import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Projects } from './pages/Projects';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>

        <Route path="/" Component={Home} />
        <Route path="/projects" Component={Projects} />
      </Routes>

    </Router>
  </React.StrictMode>
);

reportWebVitals();
