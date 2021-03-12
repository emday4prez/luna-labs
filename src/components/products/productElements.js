import styled from 'styled-components';

export const ServicesContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #e0eeff;
    color: #3d536b;
    padding-top: 180px;
    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 10px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr;
        padding: 0 1px;
    }
`;

export const ServicesCard = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 48px;
    max-height: 540px;
    padding: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media and (max-width: 480px) {
        width: 200px;
    }
`;
export const ServicesIcon = styled.img`
    height: 200px;
    width: 400px;
    margin-bottom: 1px;
    object-fit: contain;

    @media and (max-width: 480px) {
        width: 100px;
    }
`;
export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #3d536b;
    margin-bottom: 64px;
    font-weight: 200;
    letter-spacing: 0.5rem;
    @media and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`;

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
`;
