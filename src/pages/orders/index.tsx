import { FormattedNumber } from 'react-intl';
import paid from '../../assets/img/paid.png';
import checked from '../../assets/img/checked.png';
import bake from '../../assets/img/bake.png';
import bike from '../../assets/img/bike.png';
import delivered from '../../assets/img/delivered.png';
import Button from '../../components/button';
import {
    Address,
    Container,
    Customer,
    Id,
    Left,
    Right,
    Row,
    Status,
    Table,
    Th,
    Total,
    TotalTextTitle,
    Tr,
    Wrapper,
    Image,
    CheckedImage,
} from './styles';
import { GREEN, LIGHT_BLACK } from '../../constants/colors';

const Orders = () => {
    const status = 0;

    const statusClass = (index: number): string => {
        if (index - status < 1) return 'done';
        if (index - status === 1) return 'inProgress';
        if (index - status > 1) return 'undone';
        return '';
    };

    return (
        <Container>
            <Left>
                <Row>
                    <Table>
                        <tbody>
                            <Tr>
                                <Th>Order ID</Th>
                                <Th>Customer</Th>
                                <Th>Address</Th>
                                <Th>Total</Th>
                            </Tr>
                            <Tr>
                                <td>
                                    <Id>1q2w3e4r5t6y7u8i9p0</Id>
                                </td>
                                <td>
                                    <Customer>John Doe</Customer>
                                </td>
                                <td>
                                    <Address>
                                        1234 Main St, New York, NY 10001
                                    </Address>
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
                </Row>
                <Row>
                    <Status status={statusClass(0)}>
                        <Image
                            src={paid}
                            alt="paid"
                            style={{ width: '30px', height: '30px' }}
                        />
                        <span>Payment</span>
                        <div>
                            <CheckedImage
                                status={statusClass(0)}
                                src={checked}
                                alt="checked"
                                style={{ width: '20px', height: '20px' }}
                            />
                        </div>
                    </Status>
                    <Status status={statusClass(1)}>
                        <Image
                            src={bake}
                            alt="bake"
                            style={{ width: '30px', height: '30px' }}
                        />
                        <span>Preparing</span>
                        <div>
                            <CheckedImage
                                status={statusClass(1)}
                                src={checked}
                                alt="checked"
                                style={{ width: '20px', height: '20px' }}
                            />
                        </div>
                    </Status>
                    <Status status={statusClass(2)}>
                        <Image
                            src={bike}
                            alt="bike"
                            style={{ width: '30px', height: '30px' }}
                        />
                        <span>On the way</span>
                        <div>
                            <CheckedImage
                                status={statusClass(2)}
                                src={checked}
                                alt="checked"
                                style={{ width: '20px', height: '20px' }}
                            />
                        </div>
                    </Status>
                    <Status status={statusClass(3)}>
                        <Image
                            src={delivered}
                            alt="delivered"
                            style={{ width: '30px', height: '30px' }}
                        />
                        <span>Delivered</span>
                        <div>
                            <CheckedImage
                                status={statusClass(3)}
                                src={checked}
                                alt="checked"
                                style={{ width: '20px', height: '20px' }}
                            />
                        </div>
                    </Status>
                </Row>
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
                        text="PAID"
                        disabled
                        gradient={[LIGHT_BLACK, GREEN]}
                        style={{ cursor: 'not-allowed' }}
                    />
                </Wrapper>
            </Right>
        </Container>
    );
};

export default Orders;
