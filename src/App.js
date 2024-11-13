import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Demo from './Demo';
import NavbarMain from './Components/NavbarMain';
import FirstPage from './pages/FIrst-Page';
import Login from './pages/LoginModel';

function App() {

  return (
    <>
      <div className='pages-container'>
        <NavbarMain />
        <FirstPage />
        <Login/>
        <Demo />
      </div>
    </>
  )
}

export default App;