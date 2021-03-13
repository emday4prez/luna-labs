import React from 'react';

import Icon1 from '../../images/logos/KCO_SINGLE.png';
import Icon2 from '../../images/logos/LUNA_W.png';
import Icon3 from '../../images/logos/TCO_SINLGE_300.png';

import {
    ServicesContainer,
    ServicesCard,
    ServicesH1,
    ServicesH2,
    ServicesIcon,
    ServicesP,
    ServicesWrapper,
} from './productElements';

const Products = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>LUNA LABS</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
};

export default Products;
