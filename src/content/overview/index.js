import { useState } from 'react'
import CoverSection from './CoverSection';
import Footer from './Footer';
import InfoSection from './InfoSection';
import { aboutObj, discoverObj, signupObj } from './InfoSection/Data';
import Navbar from './Navbar';
import Services from './Services';
import Sidebar from './Sidebar';
import './App.css';


function Overview() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    console.log("togge sidebar")

    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <CoverSection />
      <InfoSection {...aboutObj} />
      <InfoSection {...discoverObj} />
      <InfoSection {...signupObj} />
      <Services />
      <Footer />   
    </>
  );
}

export default Overview;
