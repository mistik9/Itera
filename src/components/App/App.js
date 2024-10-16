/* eslint-disable camelcase */
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import AvitoApp from '../MyApps/Avito';
import AvitoLayout from '../MyApps/AvitoLayout';
import DromApp from '../MyApps/Drom';
import DromLayout from '../MyApps/DromLayout';
import Autoload from '../MyApps/Autoload';
import AutoloadLayout from '../MyApps/AutoloadLayout';
import AvitoJob from '../MyApps/AvitoJob';
import AvitoJobLayout from '../MyApps/AvitoJobLayout';
import PageNotFound from '../PageNotFound/PageNotFound';
import News from '../News/News';

import './App.css';
import Faq from '../Faq/Faq';
import FaqItem from '../Faq/FaqItem';
import {
  faqAutoload, faqAvito, faqDrom, faqAvitojob,
} from '../../utils/const';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function openMenu() {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <div className="app">

      <Header isNavOpen={isNavOpen} openMenu={openMenu} setIsNavOpen ={setIsNavOpen}/>
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/avito-app" element={<AvitoLayout />}>
          <Route index element={<AvitoApp />} />
          <Route path="faq" element={<Faq faq={faqAvito} />} />
          <Route path="faq/:id" element={<FaqItem faq={faqAvito} />} />
        </Route>

        <Route path="drom-app" element={<DromLayout />}>
          <Route index element={<DromApp />} />
          <Route path="faq" element={<Faq faq={faqDrom} />} />
          <Route path="faq/:id" element={<FaqItem faq={faqDrom} />} />
        </Route>

        <Route path="autoload" element={<AutoloadLayout />} >
          <Route index element={<Autoload />} />
          <Route path="faq" element={<Faq faq={faqAutoload} />} />
          <Route path="faq/:id" element={<FaqItem faq={faqAutoload} />} />
        </Route>
        <Route path="avitojob" element={<AvitoJobLayout />} >
          <Route index element={<AvitoJob />} />
          <Route path="faq" element={<Faq faq={faqAvitojob} />} />
          <Route path="faq/:id" element={<FaqItem faq={faqAvitojob} />} />
        </Route>
        <Route path="/news" element={<News />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
