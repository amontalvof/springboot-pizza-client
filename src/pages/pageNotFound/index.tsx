import {
    Container,
    ErrorMessage,
    ErrorMessageContainer,
    Title,
} from './styles';

const PageNotFound = () => {
    return (
        <Container>
            <ErrorMessage>
                <ErrorMessageContainer>
                    <Title>404</Title>
                    <p>Page not found!</p>
                </ErrorMessageContainer>
            </ErrorMessage>
        </Container>
    );
};

export default PageNotFound;
