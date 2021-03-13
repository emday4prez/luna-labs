import styled from 'styled-components';

export const ServicesContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #e0eeff;
    background: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: default;
    color: #3d536b;
    padding-top: 30rem;
    padding-bottom: 30rem;
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
    padding: 0 5px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr;
        padding: 0 1px;
    }
`;

// export const ServicesCard = styled.div`
//     background: white;
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-start;
//     align-items: center;
//     border-radius: 48px;
//     max-height: 540px;
//     max-width: 95vw;
//     padding: 1px;
//     box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
//     transition: all 0.2s ease-in-out;

//     &:hover {
//         transform: scale(1.02);
//         transition: all 0.2s ease-in-out;
//         cursor: pointer;
//     }

//     @media and (max-width: 480px) {
//         width: 200px;
//     }
// `;
export const ServicesCard = styled.div`
display:flex;
justify-content: center;
align-items: center;
 width: 50vw;
  height: 40vh;
  background: #e0eeff;
  border-radius: 5px;
  margin-bottom:1rem;
  background-size: cover;
  background-position: center center;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;
  border: 15px solid white;
}

&:hover {
  box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media and (max-width: 480px) {
        width: 90vw;
    }
`;
export const ServicesIcon = styled.img`
    width: 45vw;
    margin-bottom: 1px;
    object-fit: contain;
    max-width: 85vw;

    @media and (max-width: 480px) {
        width: 80px;
    }
`;
export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #e0eeff;
    margin-bottom: 64px;
    font-weight: 200;
    letter-spacing: 0.5rem;
    @media and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 1px;
`;

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
`;
