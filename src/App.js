import React, {Suspense} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Testimonials from './pages/Testimonials/Testimonials';
import NoMatch from './pages/NoMatch/NoMatch';
import Layout from './pages/Layout/Layout';
import Courses from './pages/Courses/Courses';
import whatsApplogo from './assets/images/whatsapp-logo.svg';

import './App.css';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <a className="link-whatsapp" href="https://api.whatsapp.com/send?phone=5521989889438&text=Ol%C3%A1.%20Tenho%20interesse%20em%20aulas%20particulares." target="_blank">
          <img src={whatsApplogo} alt="Logo Whats App" />
        </a>
        <Suspense fallback={<div>Carregando...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="*" element={<NoMatch />} />
            </Route>
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
