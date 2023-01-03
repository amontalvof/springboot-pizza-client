import styled, { keyframes, css } from 'styled-components';
import { DARK_WHITE, LIGHT_BLACK, RED, WHITE } from '../../constants/colors';

interface IStatusProps {
    status: string;
}

export const Container = styled.div`
    background-color: ${LIGHT_BLACK};
    padding: 50px;
    display: flex;
    flex-wrap: wrap;
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

export const Row = styled.div`
    :last-child {
        width: 80%;
        display: flex;
        justify-content: space-between;
    }
    @media screen and (max-width: 480px) {
        :last-child {
            width: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }
`;

export const Table = styled.table`
    width: 100%;
    text-align: left;
    margin-bottom: 50px;

    @media screen and (max-width: 480px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
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

export const Id = styled.span`
    font-weight: 500;
    color: ${RED};
    font-size: 18px;
    @media screen and (max-width: 480px) {
        ::before {
            content: 'Order ID: ';
            font-weight: 500;
        }
    }
`;

export const Cell = styled.span`
    color: ${DARK_WHITE};
    @media screen and (max-width: 480px) {
        ::before {
            content: 'Orders: ';
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

const inProgress = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const animation = () =>
    css`
        ${inProgress} 1s ease infinite alternate;
    `;

export const Status = styled.div<IStatusProps>`
    display: flex;
    align-items: center;
    flex-direction: column;
    color: ${DARK_WHITE};
    animation: ${(props) => props.status === 'inProgress' && animation};
    opacity: ${(props) => props.status === 'undone' && '0.3'};

    @media screen and (max-width: 480px) {
        margin-bottom: 20px;
    }
`;

export const CheckedImage = styled.img<IStatusProps>`
    object-fit: cover;
    display: ${(props) =>
        (props.status === 'undone' || props.status === 'inProgress') && 'none'};
`;

export const Image = styled.img`
    object-fit: cover;
`;
