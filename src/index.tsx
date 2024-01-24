import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Home } from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Projects } from './pages/Projects';
import { consts } from './data/consts';
import { ProjectMap } from './pages/ProjectMap/ProjectMap';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename={consts.baseRoute}> 
      <Routes>
        <Route path="/*" element={<Home />} /> 
        <Route path="/projects" element={<Projects />} /> 
        <Route path="/projects/map" element={<ProjectMap />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

