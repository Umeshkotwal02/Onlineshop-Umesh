import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Demo from './Demo';
import NavbarMain from './Components/NavbarMain';

function App() {

  return (
    <>
      <div className='pages-container'>
        <NavbarMain />
        <Demo />
      </div>
    </>
  )
}

export default App;