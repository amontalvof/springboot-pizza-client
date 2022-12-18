import styled from 'styled-components';
import { GREY, WHITE } from '../../constants/colors';

export const Container = styled.div`
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    color: ${WHITE};
    @media screen and (max-width: 480px) {
        text-align: center;
    }
`;

export const Desc = styled.p`
    font-size: 24px;
    color: ${GREY};
    width: 70%;
    @media screen and (max-width: 480px) {
        width: 90%;
        text-align: center;
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;
