import styled from 'styled-components';
import { DARK_WHITE, LIGHT_BLACK, RED, WHITE } from '../../constants/colors';

export const Container = styled.div`
    height: calc(100vh - 100px);
    display: flex;
    background-color: ${LIGHT_BLACK};

    @media screen and (max-width: 480px) {
        height: auto;
        text-align: center;
        flex-direction: column;
        padding-top: 20px;
    }
`;

export const Left = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

export const ImgContainer = styled.div`
    width: 80%;
    height: 80%;
    position: relative;

    @media screen and (max-width: 480px) {
        width: 70vw;
        height: 70vw;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

export const Title = styled.h1`
    color: ${WHITE};

    @media screen and (max-width: 480px) {
        margin: 5px;
    }
`;

export const Price = styled.span`
    color: ${RED};
    font-size: 24px;
    font-weight: 400;
    border-bottom: 1px solid ${RED};
`;

export const Desc = styled.p`
    color: ${DARK_WHITE};
`;

export const Choose = styled.h3`
    color: ${DARK_WHITE};
`;

export const Sizes = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 480px) {
        width: 80%;
        padding: 0px 20px;
    }
`;

export const Size = styled.div`
    width: 30px;
    height: 30px;
    position: relative;
    cursor: pointer;

    :nth-child(2) {
        width: 40px;
        height: 40px;
    }

    :last-child {
        width: 50px;
        height: 50px;
    }
`;

export const Number = styled.span`
    position: absolute;
    top: -5px;
    right: -20px;
    background-color: teal;
    color: white;
    font-size: 12px;
    padding: 0 5px;
    border-radius: 10px;
`;

export const Ingredients = styled.div`
    display: flex;
    margin-bottom: 30px;

    @media screen and (max-width: 480px) {
        flex-direction: column;
    }
`;

export const Option = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
    font-size: 14px;
    font-weight: 500;

    @media screen and (max-width: 480px) {
        margin: 10px;
        font-size: 18px;
    }
`;

export const Input = styled.input`
    width: 15px;
    height: 15px;

    @media screen and (max-width: 480px) {
        width: 25px;
        height: 25px;
    }
`;

export const Label = styled.label`
    color: ${DARK_WHITE};
    margin-left: 2px;

    @media screen and (max-width: 480px) {
        margin-left: 5px;
    }
`;

export const Add = styled.div``;

export const Quantity = styled.input`
    width: 50px;
    height: 25px;
    outline: none;

    @media screen and (max-width: 480px) {
        height: 25px;
        padding: 10px 20px;
    }
`;

export const Button = styled.button`
    height: 30px;
    margin-left: 10px;
    background-color: ${RED};
    color: ${WHITE};
    border: none;
    font-weight: 700;
    cursor: pointer;

    @media screen and (max-width: 480px) {
        height: 50px;
        padding: 10px 20px;
    }
`;
