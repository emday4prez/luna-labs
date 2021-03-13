import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 30px;
    background: linear-gradient(#fff, #e0eeff);
    position: relative;
    z-index: 1;
    flex-direction: column;

    ${
        '' /* background: linear-gradient(
            180deg,
            rgba(224, 238, 255, 0.2) 0%,
            rgba(224, 238, 255, 0.4) 100%
        ),
        linear-gradient(180deg, rgba(224, 238, 255, 0.2) 0%, transparent 100%);
    :before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        ${'' /* 
        z-index: 2;
     */
    };
`;

export const HeroBg = styled.div`
    width: 100%;

    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 75vh;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const HeroContent = styled.div`
    max-width: 1200px;

    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroH1 = styled.h1`
    color: #3c4753;
    font-size: 3rem;
    text-align: center;
    text-shadow: 0.1px 0.1px 0.2 #3d536b;
    font-weight: 200;
    @media screen and (max-width: 768px) {
        font-size: 40px;
    }
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const HeroP = styled.p`
    margin-top: 24px;
    color: #3c4753;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    font-weight: 300;
    line-height: 2.5rem;
    @media screen and (max-width: 768px) {
        font-size: 24px;
    }
    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;
