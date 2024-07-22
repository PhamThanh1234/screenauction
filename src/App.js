import React from 'react';
import './App.css';
import Header from './components/header/Header.js';
import AuctionDeatail from './components/auctionsdetail/auctionDetail.js';
import Footer from './components/footer/Footer.js';

// App component that renders Header, AuctionDeatail and Footer components.
function App() {
  return (
    <>
    <Header />
    <AuctionDeatail />
    <Footer />  {/* Footer component */}
    </>

  );
}

export default App;
