import ReactDOM from 'react-dom/client';
import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartAtTop from './common/StartAtTop';

import App from './App';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
      <StartAtTop />
    <Routes>
    <Route path="" element={<App />} />
    <Route path="about" element={<About />} />
    <Route path="work" element={<Work/>}/>
    <Route path="contact"element={<Contact />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>
);
