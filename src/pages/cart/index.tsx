import { FormattedNumber } from 'react-intl';
import Button from '../../components/button';
import { GREEN, LIGHT_BLACK, RED } from '../../constants/colors';
import { useContext, useState } from 'react';
import { StorageCartContext } from '../../context/storageCart';
import useDisableBodyScroll from '../../hooks/useDisableBodyScroll';
import PaymentModal from '../../components/paymentModal';
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
    Td,
    Wrapper,
} from './styles';

const Cart = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    useDisableBodyScroll(isOpenModal);

    const {
        state: { products },
        reducers: { resetCart },
    } = useContext(StorageCartContext);
    const subTotal = products.reduce((acc, product) => {
        return acc + product.price * product.quantity;
    }, 0);
    const discount = products.length > 0 ? (10 * subTotal) / 100 : 0;
    const total = subTotal - discount;

    const handleCheckout = () => {
        if (products.length) {
            setIsOpenModal(true);
        }
    };

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
                                    <Td>
                                        <ImgContainer>
                                            <Image
                                                src={product.image}
                                                alt="pizza"
                                            />
                                        </ImgContainer>
                                    </Td>
                                    <Td>
                                        <Name>{product.name}</Name>
                                    </Td>
                                    <Td>
                                        <Extras>{newExtras.join(', ')}</Extras>
                                    </Td>
                                    <Td>
                                        <Price>
                                            <FormattedNumber
                                                value={product.price}
                                                // eslint-disable-next-line react/style-prop-object
                                                style="currency"
                                                currency="USD"
                                            />
                                        </Price>
                                    </Td>
                                    <Td>
                                        <Quantity>{product.quantity}</Quantity>
                                    </Td>
                                    <Td>
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
                                    </Td>
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
                        gradient={[LIGHT_BLACK, GREEN]}
                        onClick={handleCheckout}
                        style={
                            !products.length ? { cursor: 'not-allowed' } : {}
                        }
                    />
                    <Button
                        text="CLEAR CART"
                        gradient={[LIGHT_BLACK, RED]}
                        onClick={() => resetCart()}
                    />
                </Wrapper>
            </Right>
            <PaymentModal
                total={total}
                products={products}
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal}
            />
        </Container>
    );
};

export default Cart;
