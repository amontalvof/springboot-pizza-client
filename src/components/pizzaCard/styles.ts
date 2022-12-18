import styled from 'styled-components';
import { GREY, RED, WHITE } from '../../constants/colors';

export const Container = styled.div`
    width: 22%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 40px;
    cursor: pointer;
    @media screen and (max-width: 480px) {
        width: 100%;
    }
`;

export const Image = styled.img`
    width: 100px;
    height: 100px;
`;

export const Title = styled.h1`
    font-size: 18px;
    font-weight: bold;
    color: ${RED};
    @media screen and (max-width: 480px) {
        font-size: 30px;
    }
`;

export const Price = styled.span`
    font-size: 18px;
    font-weight: bold;
    color: ${WHITE};
    @media screen and (max-width: 480px) {
        font-size: 24px;
    }
`;

export const Desc = styled.p`
    text-align: center;
    color: ${GREY};
    @media screen and (max-width: 480px) {
        font-size: 24px;
    }
`;
