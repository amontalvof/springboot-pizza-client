import { Container, Desc, Image, Price, Title } from './styles';
import pizza from '../../assets/img/pizza.png';
import { FormattedNumber } from 'react-intl';

const PizzaCard = () => {
    return (
        <Container>
            <Image src={pizza} alt="pizza" />
            <Title>FIORI DI ZUCCA</Title>
            <Price>
                <FormattedNumber
                    value={19.99}
                    // eslint-disable-next-line react/style-prop-object
                    style="currency"
                    currency="USD"
                />
            </Price>
            <Desc>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quaerat, voluptas!
            </Desc>
        </Container>
    );
};

export default PizzaCard;
