import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import {
    homeObjOne,
    homeObjTwo,
    homeObjThree,
} from '../components/InfoSection/data';
// import Navbar from '../components/Navbar';
// import Sidebar from '../components/Sidebar';
import Logo from '../components/Banner';
import Products from '../components/products';
import Footer from '../components/footer';

import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';

const Home = () => {
    let parallax;
    return (
        <>
            <Parallax pages={5} ref={(ref) => (parallax = ref)}>
                <ParallaxLayer
                    offset={0.8}
                    speed={1}
                    factor={3.2}
                    style={{ backgroundColor: '#e0eeff' }}
                />
                <ParallaxLayer
                    offset={3.8}
                    speed={0.4}
                    factor={1.85}
                    style={{ backgroundColor: '#5a5f66' }}
                />
                <ParallaxLayer
                    offset={2}
                    speed={0.6}
                    factor={1}
                    style={{ backgroundColor: '#7F7FD5', opacity: 0.5 }}
                />
                <ParallaxLayer
                    offset={2.95}
                    speed={0.6}
                    factor={1.75}
                    style={{ backgroundColor: '#3d536b' }}
                />

                <ParallaxLayer offset={0} speed={0}>
                    <HeroSection />
                </ParallaxLayer>

                <ParallaxLayer offset={1.575} speed={-0.75}>
                    <img
                        src={require('../images/svg/moon.svg').default}
                        alt="moon cartoon"
                        style={{
                            display: 'block',
                            width: '20%',
                            marginLeft: '65%',
                        }}
                    />
                </ParallaxLayer>
                <ParallaxLayer offset={1.25} speed={-0.3}>
                    <img
                        src={require('../images/svg/cloud2.svg').default}
                        alt="cloud"
                        style={{
                            display: 'block',
                            width: '20%',
                            marginLeft: '15%',
                        }}
                    />
                    <img
                        src={require('../images/svg/cloud2.svg').default}
                        alt="cloud cartoon"
                        style={{
                            display: 'block',
                            width: '40%',
                            marginLeft: '65%',
                        }}
                    />
                </ParallaxLayer>
                <ParallaxLayer offset={2.25} speed={1.2}>
                    <img
                        src={require('../images/svg/star2.svg').default}
                        alt="star2"
                        style={{
                            display: 'block',
                            width: '06%',
                            marginLeft: '65%',
                        }}
                    />
                    <img
                        src={require('../images/svg/star2.svg').default}
                        alt="moon cartoon"
                        style={{
                            display: 'block',
                            width: '4%',
                            marginLeft: '15%',
                        }}
                    />{' '}
                    <img
                        src={require('../images/svg/star1.svg').default}
                        alt="moon cartoon"
                        style={{
                            display: 'block',
                            width: '5%',
                            marginLeft: '85%',
                        }}
                    />
                    <img
                        src={require('../images/svg/star1.svg').default}
                        alt="moon cartoon"
                        style={{
                            display: 'block',
                            width: '3%',
                            marginLeft: '55%',
                        }}
                    />
                    <img
                        src={require('../images/svg/star1.svg').default}
                        alt="moon cartoon"
                        style={{
                            display: 'block',
                            width: '2%',
                            marginLeft: '55%',
                        }}
                    />
                    <img
                        src={require('../images/svg/star1.svg').default}
                        alt="moon cartoon"
                        style={{
                            display: 'block',
                            width: '2%',
                            marginLeft: '35%',
                        }}
                    />
                    <img
                        src={require('../images/svg/star1.svg').default}
                        alt="moon cartoon"
                        style={{
                            display: 'block',
                            width: '2%',
                            marginLeft: '95%',
                        }}
                    />
                </ParallaxLayer>
                <ParallaxLayer offset={2.9} speed={3}>
                    <img
                        src={require('../images/svg/satellite-2.svg').default}
                        alt="moon cartoon"
                        style={{
                            display: 'block',
                            width: '9%',
                            marginLeft: '45%',
                        }}
                    />
                </ParallaxLayer>
                <ParallaxLayer offset={2.35} speed={1.75}>
                    <img
                        src={require('../images/svg/star1.svg').default}
                        alt="moon cartoon"
                        style={{
                            display: 'block',
                            width: '7%',
                            marginLeft: '35%',
                            marginBottom: '40%',
                        }}
                    />
                    <img
                        src={require('../images/svg/star1.svg').default}
                        alt="moon cartoon"
                        style={{
                            display: 'block',
                            width: '5%',
                            marginLeft: '65%',
                        }}
                    />
                    <img
                        src={require('../images/svg/star1.svg').default}
                        alt="moon cartoon"
                        style={{
                            display: 'block',
                            width: '10%',
                            marginLeft: '15%',
                        }}
                    />{' '}
                    <img
                        src={require('../images/svg/big-dipper.svg').default}
                        alt="moon cartoon"
                        style={{
                            display: 'block',
                            width: '10%',
                            marginLeft: '55%',
                        }}
                    />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.8}>
                    <InfoSection {...homeObjThree} />
                </ParallaxLayer>
                <ParallaxLayer offset={1.75} speed={0}>
                    <img
                        src={require('../images/svg/planet-earth.svg').default}
                        alt="moon cartoon"
                        style={{
                            display: 'block',
                            width: '40%',
                            marginLeft: '5%',
                        }}
                    />
                </ParallaxLayer>
                <ParallaxLayer offset={1.75} speed={0.3}>
                    <InfoSection {...homeObjOne} />
                </ParallaxLayer>

                <ParallaxLayer offset={3.14} speed={0.5}>
                    <Products />
                </ParallaxLayer>
                <ParallaxLayer offset={4} speed={3.5}>
                    <Footer />
                </ParallaxLayer>
            </Parallax>
        </>
    );
};

export default Home;
