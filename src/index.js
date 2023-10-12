import ReactDOM from 'react-dom/client';
import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
    <Routes>
    <Route path="" element={<App />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>
);



