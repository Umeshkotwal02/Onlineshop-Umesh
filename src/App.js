import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarMain from './Components/NavbarMain';
import FirstPage from './pages/FIrst-Page';
import SignUpModal from './pages/SignUpModal';

function App() {

  return (
    <>
      <div className='pages-container'>
        {/* <Demo /> */}
        <NavbarMain />
        <FirstPage />
        <SignUpModal />
      </div>
    </>
  )
}

export default App;


