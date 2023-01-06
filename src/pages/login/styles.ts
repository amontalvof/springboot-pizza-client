import styled from 'styled-components';
import { DARK_WHITE, LIGHT_BLACK, WHITE } from '../../constants/colors';

export const Container = styled.div`
    height: calc(100vh - 100px);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${LIGHT_BLACK};
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px;
    border-radius: 14px;
    background: linear-gradient(145deg, #24282f, #2b2f38);
    box-shadow: 41px 41px 82px #181b20, -41px -41px 82px #383d48;
`;

export const Title = styled.h1`
    color: ${WHITE};
    @media screen and (max-width: 480px) {
        font-size: 20px;
    }
`;

export const Label = styled.span`
    color: ${DARK_WHITE};
`;
