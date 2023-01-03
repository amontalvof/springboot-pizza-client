import { StyledButton, TextContainer } from './styles';

interface IButtonProps {
    text: string;
    style?: React.CSSProperties;
    gradient: string[];
    disabled?: boolean;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}
const Button = ({
    type = 'button',
    text,
    style,
    gradient,
    disabled,
    onClick,
}: IButtonProps) => {
    return (
        <StyledButton
            style={style}
            gradient={gradient}
            disabled={disabled}
            onClick={onClick}
            type={type}
        >
            <TextContainer>{text}</TextContainer>
        </StyledButton>
    );
};

export default Button;
