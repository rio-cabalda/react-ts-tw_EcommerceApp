import React from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import HeadlineCards from './component/HeadlineCards';
import ProductList from './component/ProductList';
import Category from './component/Category';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <ProductList />
      <Category />
      <Footer />
    </div>
  );
}

export default App;
