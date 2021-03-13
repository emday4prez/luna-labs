import React from 'react';
import { LogoBanner, BannerContainer } from './bannerElements';

const Logo = () => {
    return (
        <>
            <BannerContainer>
                <LogoBanner
                    src={
                        require('../../images/logos/LUNA_LABS_LOGO_web.png')
                            .default
                    }
                    alt={'luna labs company text logo'}
                />
            </BannerContainer>
        </>
    );
};

export default Logo;
