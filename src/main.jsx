import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import InicioPage from './pages/InicioPage.jsx';
import Page2 from './pages/Page2.jsx';
import './index.css'
import './App.css'
import LoginPage from './components/LoginPage.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<InicioPage />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/login" element={<LoginPage />} />
      
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
