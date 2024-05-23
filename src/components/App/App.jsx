import { Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage';
import ContactButton from '../ContactButton/ContactButton';
import Header from '../Header/Header';
import Footer from '../../components/Footer/Footer'
import Photography from '../../pages/Photography/Photography';
import Portfolio from '../../pages/Portfolio/Portfolio.jsx';
import Contact from '../../pages/Contact/Contact';
import OurServices from '../../pages/OurServices/OurServices';
import VideoProd from '../../pages/VideoProd/VideoProd';
import s from './App.module.css'

import ModalWindow from '../ModalWindow/ModalWindow.jsx';
import { useState } from 'react';


function App() {

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className={s.wrapper}>
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/photography' element={<Photography modalOpen={modalOpen} setModalOpen={setModalOpen}/>}/>
        <Route path='/videoproduction' element={<VideoProd modalOpen={modalOpen} setModalOpen={setModalOpen}/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/ourservices' element={<OurServices/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      {/* <MainPage /> */}
      <ModalWindow modalOpen={modalOpen} setModalOpen={setModalOpen}/>
      <ContactButton modalOpen={modalOpen} setModalOpen={setModalOpen}/>
      <Footer modalOpen={modalOpen} setModalOpen={setModalOpen}/>
    </div>
  );
}

export default App;
