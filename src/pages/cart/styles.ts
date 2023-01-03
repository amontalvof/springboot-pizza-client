import styled from 'styled-components';
import {
    BLACK,
    DARK_WHITE,
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

export const Left = styled.div`
    flex: 2;
    margin-right: 50px;
    @media screen and (max-width: 480px) {
        margin-right: 0;
    }
`;

export const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`;

export const ImgContainer = styled.div`
    width: 100px;
    height: 100px;
    position: relative;
    @media screen and (max-width: 480px) {
        width: 35vw;
        height: 35vw;
        display: flex;
        justify-content: center;
        align-items: center;
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
        margin-bottom: 20px;
    }
`;

export const Td = styled.td`
    @media screen and (max-width: 480px) {
        text-align: center;
    }
`;

export const Th = styled.th`
    color: ${WHITE};
    @media screen and (max-width: 480px) {
        display: none;
    }
`;

export const Image = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
`;

export const Name = styled.span`
    font-weight: 500;
    color: ${RED};
    font-size: 18px;
    @media screen and (max-width: 480px) {
        ::before {
            content: 'Name: ';
            font-weight: 500;
        }
    }
`;

export const Extras = styled.span`
    color: ${DARK_WHITE};
    @media screen and (max-width: 480px) {
        ::before {
            content: 'Extras: ';
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

export const Quantity = styled.span`
    color: ${DARK_WHITE};
    @media screen and (max-width: 480px) {
        ::before {
            content: 'Quantity: ';
            font-weight: 500;
        }
    }
`;

export const Total = styled.span`
    font-weight: 500;
    font-size: 18px;
    color: ${DARK_WHITE};
    @media screen and (max-width: 480px) {
        font-size: 24px;
        ::before {
            content: 'Total: ';
            font-weight: 500;
        }
    }
`;

export const Wrapper = styled.div`
    width: 90%;
    max-height: 300px;
    background-color: ${DARK_WHITE};
    padding: 30px 50px;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: ${BLACK};
    @media screen and (max-width: 480px) {
        width: 100%;
    }
`;

export const TotalTextTitle = styled.b`
    margin-right: 10px;
`;
