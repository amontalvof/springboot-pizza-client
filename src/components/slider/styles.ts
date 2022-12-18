import styled from 'styled-components';
import { RED } from '../../constants/colors';

export const Container = styled.div`
    background-color: ${RED};
    height: calc(100vh - 100px);
    overflow: hidden;
    position: relative;
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    @media screen and (max-width: 480px) {
        height: 50vh;
    }
`;

export const ArrowContainer = styled.div`
    position: absolute;
    width: 10%;
    height: 20%;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    z-index: 2;
`;

export const Wrapper = styled.div`
    width: 300vw;
    height: 100%;
    display: flex;
    transition: all 1.5s ease-in-out;
`;

export const ImgContainer = styled.div`
    width: 100vw;
    height: 100%;
    position: relative;
`;

export const Image = styled.img`
    object-fit: contain;
    width: 100%;
    height: 100%;
`;
