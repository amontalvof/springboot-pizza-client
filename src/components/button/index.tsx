import { StyledButton, TextContainer } from './styles';

interface IButtonProps {
    text: string;
    style?: React.CSSProperties;
    gradient: string[];
    disabled?: boolean;
    onClick?: () => void;
}
const Button = ({ text, style, gradient, disabled, onClick }: IButtonProps) => {
    return (
        <StyledButton
            style={style}
            gradient={gradient}
            disabled={disabled}
            onClick={onClick}
        >
            <TextContainer>{text}</TextContainer>
        </StyledButton>
    );
};

export default Button;
