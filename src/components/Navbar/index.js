import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,
    ImgLogo,
} from './Navbar.Elements';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <IconContext.Provider value={{ color: '#e0eeff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={toggleHome}>
                            <ImgLogo
                                src={
                                    require('../../images/logos/moon_little.png')
                                        .default
                                }
                                alt="luna labs crescent moon logo"
                            />
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="about">About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="quality">Quality</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="sustainable">
                                    Sustainable
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="wellness">Wellness</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to="/contact"> Contact</NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
