import React from 'react';
import Header from './components/Header';
import Container from './components/Container';
import ContactApp from './components/ContactApp';
import Lottery from './components/Lottery';


function App() {
  return (
  <>
    <Header />
    <Lottery />
    <hr/>
    <ContactApp/>
    <hr/>
    <Container/>
  </>

  );
}

export default App;
