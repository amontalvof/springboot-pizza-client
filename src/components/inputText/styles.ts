import styled from 'styled-components';
import { RED } from '../../constants/colors';

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 15px;
`;

export const Label = styled.label`
    margin-bottom: 5px;
`;

export const Input = styled.input`
    height: 40px;
    font-size: 16px;
    outline: none;
    font-family: 'Merienda', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
        'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    padding: 0 10px;
`;

export const ErrorContainer = styled.div`
    max-width: 300px;
`;

export const ErrorText = styled.p`
    color: ${RED};
    font-size: 12px;
    font-weight: bold;
    line-break: auto;
`;
