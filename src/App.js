import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Page from './Components/Page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Homepage/Home';
import PageBusiness from './Components/PageBusiness'
import Login from './Components/Login';
import Buy from './Components/Homepage/Buy';
import Sell from './Components/Sell'
import ConfirmationPage from './Components/ConfirmationPage';







function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign-Up' element={<Page />} />
          <Route path='/business-sign-up' element={<PageBusiness />} />
          <Route path='/login' element={<Login />} />
          <Route path='/instant-buy' element={<Buy />} />
          <Route path='/instant-sell' element={<Sell />} />
          <Route path='/confirmation' element={<ConfirmationPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
