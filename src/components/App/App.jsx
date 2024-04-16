import { Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage';
import ContactButton from '../ContactButton/ContactButton';
import Header from '../Header/Header';
import Footer from '../../components/Footer/Footer'
import Photography from '../../pages/Photography/Photography';
import Portfolio from '../../pages/Portfolio/Portfolio';
import Contact from '../../pages/Contact/Contact';
import OurServices from '../../pages/OurServices/OurServices';
import VideoProd from '../../pages/VideoProd/VideoProd';


function App() {
  return (
    <div>
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
