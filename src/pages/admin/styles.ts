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

    @media screen and (max-width: 480px) {
        flex-direction: column;
        padding: 20px;
    }
`;

export const Item = styled.div`
    flex: 1;
`;

export const Title = styled.h1`
    font-size: 30px;
    color: ${WHITE};
    @media screen and (max-width: 480px) {
        text-align: center;
    }
`;

export const Table = styled.table`
    width: 100%;
    border-spacing: 20px;
    text-align: left;
    @media screen and (max-width: 480px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const Tr = styled.tr`
    @media screen and (max-width: 480px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 30px;
    }
`;

export const Th = styled.th`
    color: ${WHITE};
    @media screen and (max-width: 480px) {
        display: none;
    }
`;

export const Td = styled.td`
    color: ${DARK_WHITE};
    @media screen and (max-width: 480px) {
        text-align: center;
        margin-bottom: 5px;
    }
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
    @media screen and (max-width: 480px) {
        :first-child {
            margin-right: 0;
        }
    }
`;

export const Id = styled.span`
    font-weight: 500;
    color: ${RED};
    font-size: 18px;
    @media screen and (max-width: 480px) {
        ::before {
            content: 'Id: ';
            font-weight: 500;
        }
    }
`;

export const Name = styled.span`
    color: ${DARK_WHITE};
    @media screen and (max-width: 480px) {
        ::before {
            content: 'Name: ';
            font-weight: 500;
        }
    }
`;

export const Desc = styled.p`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
    @media screen and (max-width: 480px) {
        width: 100px;
        ::before {
            content: 'Desc: ';
            font-weight: 500;
        }
    }
`;

export const Customer = styled.span`
    color: ${DARK_WHITE};
    @media screen and (max-width: 480px) {
        ::before {
            content: 'Name: ';
            font-weight: 500;
        }
    }
`;

export const Price = styled.span`
    color: ${DARK_WHITE};
    @media screen and (max-width: 480px) {
        ::before {
            content: 'Price: ';
            font-weight: 500;
        }
    }
`;

export const Status = styled.span`
    color: ${DARK_WHITE};
    @media screen and (max-width: 480px) {
        ::before {
            content: 'Status: ';
            font-weight: 500;
        }
    }
`;
