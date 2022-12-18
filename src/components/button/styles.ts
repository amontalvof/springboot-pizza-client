import styled from 'styled-components';
import { DARK_WHITE } from '../../constants/colors';

interface StyledButtonProps {
    gradient: string[];
}

export const StyledButton = styled.button<StyledButtonProps>`
    background-color: transparent;
    height: 40px;
    font-weight: bold;
    font-size: 16px;
    font-family: 'Merienda', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
        'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    cursor: pointer;
    margin-top: 20px;
    border: none;
    color: ${DARK_WHITE};
    background-image: ${(props) =>
        props.gradient &&
        `-webkit-linear-gradient(right, ${props.gradient[0]}, ${props.gradient[1]})`};
`;

export const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
