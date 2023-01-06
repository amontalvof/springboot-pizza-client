import { FormattedNumber } from 'react-intl';
import IPizza from '../../types/pizza';
import { Container, Desc, Image, Price, StyledLink, Title } from './styles';

const PizzaCard = ({ pizza }: { pizza: IPizza }) => {
    const prices = JSON.parse(pizza.prices);
    return (
        <Container>
            <StyledLink to={`/product/${pizza.id}`}>
                <Image src={pizza.img} alt="pizza" />
            </StyledLink>
            <StyledLink to={`/product/${pizza.id}`}>
                <Title>{pizza.title}</Title>
            </StyledLink>
            <Price>
                <FormattedNumber
                    value={prices[0]}
                    // eslint-disable-next-line react/style-prop-object
                    style="currency"
                    currency="USD"
                />
            </Price>
            <Desc>{pizza.description}</Desc>
        </Container>
    );
};

export default PizzaCard;
