import { FormattedNumber } from 'react-intl';
import pizza from '../../assets/img/pizza.png';
import Button from '../../components/button';
import { LIGHT_BLACK, RED } from '../../constants/colors';
import {
    Container,
    Extras,
    Image,
    ImgContainer,
    Left,
    Name,
    Price,
    Quantity,
    Right,
    Table,
    Th,
    Total,
    TotalTextTitle,
    Tr,
    Wrapper,
} from './styles';

const Cart = () => {
    return (
        <Container>
            <Left>
                <Table>
                    <tbody>
                        <Tr>
                            <Th>Product</Th>
                            <Th>Name</Th>
                            <Th>Extras</Th>
                            <Th>Price</Th>
                            <Th>Quantity</Th>
                            <Th>Total</Th>
                        </Tr>
                        <Tr>
                            <td>
                                <ImgContainer>
                                    <Image src={pizza} alt="pizza" />
                                </ImgContainer>
                            </td>
                            <td>
                                <Name>CORALZO</Name>
                            </td>
                            <td>
                                <Extras>Double Ingredients, Spicy Sauce</Extras>
                            </td>
                            <td>
                                <Price>
                                    <FormattedNumber
                                        value={19.99}
                                        // eslint-disable-next-line react/style-prop-object
                                        style="currency"
                                        currency="USD"
                                    />
                                </Price>
                            </td>
                            <td>
                                <Quantity>2</Quantity>
                            </td>
                            <td>
                                <Total>
                                    <FormattedNumber
                                        value={39.99}
                                        // eslint-disable-next-line react/style-prop-object
                                        style="currency"
                                        currency="USD"
                                    />
                                </Total>
                            </td>
                        </Tr>
                    </tbody>
                </Table>
            </Left>
            <Right>
                <Wrapper>
                    <h2>CART TOTAL</h2>
                    <div>
                        <TotalTextTitle>Subtotal:&nbsp;</TotalTextTitle>
                        <FormattedNumber
                            value={79.99}
                            // eslint-disable-next-line react/style-prop-object
                            style="currency"
                            currency="USD"
                        />
                    </div>
                    <div>
                        <TotalTextTitle>Discount:&nbsp;</TotalTextTitle>
                        <FormattedNumber
                            value={0}
                            // eslint-disable-next-line react/style-prop-object
                            style="currency"
                            currency="USD"
                        />
                    </div>
                    <div>
                        <TotalTextTitle>Total:&nbsp;</TotalTextTitle>
                        <FormattedNumber
                            value={79.99}
                            // eslint-disable-next-line react/style-prop-object
                            style="currency"
                            currency="USD"
                        />
                    </div>
                    <Button
                        text="CHECKOUT NOW!"
                        gradient={[LIGHT_BLACK, RED]}
                    ></Button>
                </Wrapper>
            </Right>
        </Container>
    );
};

export default Cart;
