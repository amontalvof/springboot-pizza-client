import { FormattedNumber } from 'react-intl';
import Button from '../../components/button';
import { LIGHT_BLACK, RED } from '../../constants/colors';
import { useContext } from 'react';
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
import { StorageCartContext } from '../../context/storageCart';

const Cart = () => {
    const {
        state: { products },
    } = useContext(StorageCartContext);
    const subTotal = products.reduce((acc, product) => {
        return acc + product.price * product.quantity;
    }, 0);
    const discount = products.length > 0 ? (10 * subTotal) / 100 : 0;
    const total = subTotal - discount;
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
                        {products.map((product, index) => {
                            const newExtras = product.extras.map(
                                (item) => item.text
                            );
                            return (
                                <Tr key={`product-cart-${index}`}>
                                    <td>
                                        <ImgContainer>
                                            <Image
                                                src={product.image}
                                                alt="pizza"
                                            />
                                        </ImgContainer>
                                    </td>
                                    <td>
                                        <Name>{product.name}</Name>
                                    </td>
                                    <td>
                                        <Extras>{newExtras.join(', ')}</Extras>
                                    </td>
                                    <td>
                                        <Price>
                                            <FormattedNumber
                                                value={product.price}
                                                // eslint-disable-next-line react/style-prop-object
                                                style="currency"
                                                currency="USD"
                                            />
                                        </Price>
                                    </td>
                                    <td>
                                        <Quantity>{product.quantity}</Quantity>
                                    </td>
                                    <td>
                                        <Total>
                                            <FormattedNumber
                                                value={
                                                    product.price *
                                                    product.quantity
                                                }
                                                // eslint-disable-next-line react/style-prop-object
                                                style="currency"
                                                currency="USD"
                                            />
                                        </Total>
                                    </td>
                                </Tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Left>
            <Right>
                <Wrapper>
                    <h2>CART TOTAL</h2>
                    <div>
                        <TotalTextTitle>Subtotal:&nbsp;</TotalTextTitle>
                        <FormattedNumber
                            value={subTotal}
                            // eslint-disable-next-line react/style-prop-object
                            style="currency"
                            currency="USD"
                        />
                    </div>
                    <div>
                        <TotalTextTitle>Discount:&nbsp;</TotalTextTitle>
                        <FormattedNumber
                            value={discount}
                            // eslint-disable-next-line react/style-prop-object
                            style="currency"
                            currency="USD"
                        />
                    </div>
                    <div>
                        <TotalTextTitle>Total:&nbsp;</TotalTextTitle>
                        <FormattedNumber
                            value={total}
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
