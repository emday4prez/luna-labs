import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import {
    homeObjOne,
    homeObjTwo,
    homeObjThree,
} from '../components/InfoSection/data';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Logo from '../components/Banner';
import Products from '../components/products';
import Footer from '../components/footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Logo />
            <HeroSection />

            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Products />
            <Footer />
        </>
    );
};

export default Home;
