import { Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage';
import ContactButton from '../ContactButton/ContactButton';
import Header from '../Header/Header';
import Footer from '../../components/Footer/Footer'
import Photography from '../../pages/Photography/Photography';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/photography' element={<Photography />}/>
        <Route path='/videoproduction' element={''}/>
        <Route path='/portfolio' element={''}/>
        <Route path='/ourservices' element={''}/>
        <Route path='/contact' element={''}/>
      </Routes>
      {/* <MainPage /> */}
      <ContactButton />
      <Footer/>
    </div>
  );
}

export default App;
