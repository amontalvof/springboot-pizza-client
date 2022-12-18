import styled from 'styled-components';
import { BLACK, DARK_WHITE, GOLD, GREY } from '../../constants/colors';

export const Container = styled.div`
    height: calc(100vh - 100px);
    background-color: ${BLACK};
    display: flex;

    @media screen and (max-width: 480px) {
        height: auto;
        text-align: center;
    }
`;

export const Item = styled.div`
    flex: 1;
    position: relative;
    display: flex;

    :last-child {
        flex: 2;
        padding: 50px;
        justify-content: space-between;
    }

    @media screen and (max-width: 480px) {
        :first-child {
            display: none;
        }
        flex-direction: column;
    }
`;

export const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

export const Card = styled.div`
    flex: 1;
    padding: 0 20px;
`;

export const Motto = styled.h2`
    color: ${DARK_WHITE};
`;

export const Title = styled.h1`
    font-size: 18px;
    color: ${GOLD};

    @media screen and (max-width: 480px) {
        font-size: 30px;
    }
`;

export const Text = styled.p`
    color: ${GREY};

    @media screen and (max-width: 480px) {
        font-size: 20px;
    }
`;
