import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Pro from "./components/portfolio";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Contact from './components/contact';
import Model from './components/model';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/my-web" element={<App />} />
      <Route path="/portfolio" element={<Pro />} />
      <Route path="/model" element={<Model />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
