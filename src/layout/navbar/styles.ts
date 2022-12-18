import styled from 'styled-components';
import { RED, WHITE } from '../../constants/colors';

export const Container = styled.div`
    height: 100px;
    padding: 0px 50px;
    background-color: ${RED};
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 999;
`;

export const Item = styled.div`
    flex: 1;
    display: flex;
    align-items: center;

    :nth-child(2) {
        flex: 1;
    }
    :last-child {
        justify-content: flex-end;
    }
    @media screen and (max-width: 480px) {
        :nth-child(2) {
            display: none;
        }

        :nth-child(1) {
            flex: 3;
        }
    }
`;

export const CallButton = styled.div`
    background-color: ${WHITE};
    border-radius: 50%;
    padding: 10px;
    width: 34px;
    height: 34px;
`;

export const Texts = styled.div`
    margin-left: 20px;
    color: ${WHITE};
`;

export const Text = styled.div`
    :first-child {
        font-size: 12px;
        font-weight: 700;
    }
    :last-child {
        font-size: 20px;
        font-weight: bold;
    }
    @media screen and (max-width: 480px) {
        :last-child {
            font-size: 16px;
            font-weight: 700;
        }
    }
`;

export const Image = styled.img`
    width: 32px;
    height: 32px;
`;

export const List = styled.ul`
    padding: 0;
    display: flex;
    align-items: center;
    list-style: none;
    color: white;
`;

export const ListItem = styled.li`
    margin: 20px;
    font-weight: 500;
`;

export const Cart = styled.div`
    position: relative;
`;

export const Counter = styled.div`
    position: absolute;
    top: -10px;
    right: -10px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: white;
    padding: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: ${RED};
`;
