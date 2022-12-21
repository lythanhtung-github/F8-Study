import React from 'react';
import Header from './components/Header';
import Container from './components/Container';
import ContactApp from './components/ContactApp';
import Lottery from './components/Lottery';
import UseEffect from './components/UseEffect';
import Album from './components/album/Album';
import { Routes, Route } from 'react-router-dom';
import Photo from './components/photo/Photo';


function App() {
  return (
    <>
      <Header />
      <Routes>

        <Route path='/' element={<ContactApp />} />
        <Route path='/register' element={<Container />} />
        <Route path='/use-effect' element={<UseEffect />} />
        <Route path='/lotto' element={<Lottery />} />
        <Route path='/album' element={<Album />} />
        <Route path="/photos/:albumId" element={<Photo />} />
      </Routes>
    </>

  );
}

export default App;
