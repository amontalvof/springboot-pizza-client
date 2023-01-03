import styled, { keyframes } from 'styled-components';
import { BLACK, RED, TRANSPARENT_BLACK, WHITE } from '../../constants/colors';

interface IModalProps {
    isOpenModal?: boolean;
}

export const Modal = styled.div<IModalProps>`
    display: ${(props) =>
        props.isOpenModal ? 'block' : 'none'}; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 120px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: ${TRANSPARENT_BLACK}; /* Black w/ opacity */
`;

const animatetop = keyframes`
    from {
        top:-300px; 
        opacity:0
    }
    to {
        top:0; 
        opacity:1
    }
`;

export const ModalContent = styled.div`
    position: relative;
    background-color: ${WHITE};
    margin: auto;
    padding: 0;
    width: 500px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-animation-name: ${animatetop};
    -webkit-animation-duration: 0.4s;
    animation-name: ${animatetop};
    animation-duration: 0.4s;

    @media screen and (max-width: 480px) {
        width: 300px;
    }
`;

export const ModalHeader = styled.div`
    padding: 2px 16px;
    background-color: ${WHITE};
    color: ${BLACK};
`;

export const ModalBody = styled.div`
    padding: 10px 20px;
`;

export const ModalFooter = styled.div`
    padding: 0 20px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Close = styled.span`
    color: ${BLACK};
    float: right;
    font-size: 28px;
    font-weight: bold;
    :hover,
    :focus {
        color: ${RED};
        text-decoration: none;
        cursor: pointer;
    }
`;

export const Title = styled.h1`
    font-weight: 300;
    font-size: 25px;
    @media screen and (max-width: 480px) {
        font-size: 20px;
    }
`;
