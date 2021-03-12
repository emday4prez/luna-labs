import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SideBtnWrap,
    SidebarRoute,
    SidebarLink,
    SidebarMenu,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink onClick={toggle} to="home">
                        About
                    </SidebarLink>
                    <SidebarLink to="wellness" onClick={toggle}>
                        Wellness
                    </SidebarLink>
                    <SidebarLink to="sustainability" onClick={toggle}>
                        Sustainable
                    </SidebarLink>
                    <SidebarLink to="natural" onClick={toggle}>
                        Natural
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/contact" onClick={toggle}>
                        Contact
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
