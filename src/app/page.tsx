import React from 'react';
import Header1 from './components/Header1';
import Header2 from './components/Header2';
import Hero from './components/Hero';
import Newarrival from "./components/Newarrival";
import Topsell from "./components/Topsell";
import Category from "./components/Category";
import Customer from "./components/Customer";
import Footer from "./components/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <Header1 />
      <Header2 />
      <Hero/>
      <Newarrival/>
      <Topsell/>
      <Category/>
      <Customer/>
      <Footer /> 
    </div>
  );
};

export default Home;