import styled from 'styled-components';

export const LogoBanner = styled.img`
    width: 70%;

    padding-right: 0;
    min-height: 30vh;
    object-fit: contain;
`;

export const BannerContainer = styled.div`
    color: #e0eeff;
    background: transparent;
    ${'' /* background: linear-gradient(white, #e0eeff); */}
    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 1;
    padding-top: 1rem;

    ${
        '' /* @media screen and (max-width: 768px) {
        padding: 100px 0;
    } */
    }
`;
