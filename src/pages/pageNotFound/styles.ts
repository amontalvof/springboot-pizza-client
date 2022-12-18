import styled, { keyframes } from 'styled-components';
import { GOLD, RED, BLACK } from '../../constants/colors';

export const Container = styled.div`
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(
        -225deg,
        ${RED} 0%,
        ${GOLD} 51%,
        ${BLACK} 100%
    );
`;

export const ErrorMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh-100px);
    width: 100%;
`;

export const ErrorMessageContainer = styled.div`
    text-align: center;
    color: white;
    h1 {
        font-size: 100px;
    }
    p {
        font-size: 30px;
    }
`;

const bounce = keyframes`
    0%, 20%, 50%, 80%, 100% { transform: translateY(0);}
    40% {transform: translateY(-30px);}
    60% {transform: translateY(-15px);}
`;

export const Title = styled.h1`
    animation-duration: 2.5s;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
    animation-name: ${bounce};
`;
