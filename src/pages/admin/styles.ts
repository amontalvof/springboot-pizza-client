import styled from 'styled-components';
import {
    DARK_WHITE,
    GREEN,
    LIGHT_BLACK,
    RED,
    WHITE,
} from '../../constants/colors';

export const Container = styled.div`
    padding: 50px;
    display: flex;
    flex-wrap: wrap;
    background-color: ${LIGHT_BLACK};
`;

export const Item = styled.div`
    flex: 1;
`;

export const Title = styled.h1`
    font-size: 30px;
    color: ${WHITE};
`;

export const Th = styled.th`
    color: ${WHITE};
`;

export const Td = styled.td`
    color: ${DARK_WHITE};
`;

export const Desc = styled.p`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100px;
`;

export const Table = styled.table`
    width: 100%;
    border-spacing: 20px;
    text-align: left;
`;

export const Image = styled.img`
    object-fit: cover;
    width: 50px;
    height: 50px;
`;

export const Button = styled.button`
    border: none;
    color: white;
    padding: 5px;
    cursor: pointer;
    font-family: 'Merienda', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
        'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    :first-child {
        background-color: ${GREEN};
        margin-right: 10px;
    }
    :last-child {
        background-color: ${RED};
    }
`;
