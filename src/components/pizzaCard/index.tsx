import { Container, Desc, Image, Price, Title } from './styles';
import { FormattedNumber } from 'react-intl';
import IPizza from '../../types/pizza';
import { Link } from 'react-router-dom';

const PizzaCard = ({ pizza }: { pizza: IPizza }) => {
    const prices = JSON.parse(pizza.prices);
    return (
        <Container>
            <Link to={`/product/${pizza.id}`}>
                <Image src={pizza.img} alt="pizza" />
            </Link>
            <Title>{pizza.title}</Title>
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
