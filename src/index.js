import ReactDOM from 'react-dom/client';
import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Contact from './components/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="/AboutMe" element={<AboutMe />} />
    <Route path="/Experience" element={<Experience/>}/>
    <Route path="/Contact"element={<Contact />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>
);



