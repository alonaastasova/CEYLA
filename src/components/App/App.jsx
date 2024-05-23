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



function App() {

  return (
    <div className={s.wrapper}>
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/photography' element={<Photography />}/>
        <Route path='/videoproduction' element={<VideoProd />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
        <Route path='/ourservices' element={<OurServices />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      {/* <MainPage /> */}
      <ContactButton />
      <Footer/>
    </div>
  );
}

export default App;
