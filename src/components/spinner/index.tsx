import { BounceLoader } from 'react-spinners';
import { RED } from '../../constants/colors';
import { StyledSpan } from '../../pages/home/styles';
import { SpinnerContainer } from './styles';

interface ISpinnerProps {
    color?: string;
    size: number;
    text?: string;
}

export const Spinner = ({ size, text, color }: ISpinnerProps) => {
    const colorFondo = color || RED;
    return (
        <SpinnerContainer>
            <BounceLoader size={size} color={colorFondo} />
            <StyledSpan>{text}</StyledSpan>
        </SpinnerContainer>
    );
};
