import React from 'react';
import Header from '../components/Header/Header'; // Ensure correct path & case
import Banner from '../components/Banner/Banner';
import Posts from '../components/Posts/Posts';
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <main className="homeParentDiv">
      <Header />
      <Banner />
      <Posts />
      <Footer />
    </main>
  );
}

export default Home;
