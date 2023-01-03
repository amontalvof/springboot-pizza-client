import { FormattedNumber } from 'react-intl';
import paid from '../../assets/img/paid.png';
import checked from '../../assets/img/checked.png';
import bake from '../../assets/img/bake.png';
import bike from '../../assets/img/bike.png';
import delivered from '../../assets/img/delivered.png';
import {
    Container,
    Id,
    Left,
    Row,
    Status,
    Table,
    Th,
    Total,
    Tr,
    Image,
    CheckedImage,
    Td,
    Cell,
} from './styles';

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
                                <Th>Phone Number</Th>
                                <Th>Address</Th>
                                <Th>Pizzas</Th>
                                <Th>Total</Th>
                            </Tr>
                            <Tr>
                                <Td>
                                    <Id>1</Id>
                                </Td>
                                <Td>
                                    <Cell>John Doe</Cell>
                                </Td>
                                <Td>
                                    <Cell>1234567890</Cell>
                                </Td>
                                <Td>
                                    <Cell>
                                        1234 Main St, New York, NY 10001
                                    </Cell>
                                </Td>
                                <Td>
                                    <Cell>Pizza Marinara, Pizza Margarita</Cell>
                                </Td>
                                <Td>
                                    <Total>
                                        <FormattedNumber
                                            value={39.99}
                                            // eslint-disable-next-line react/style-prop-object
                                            style="currency"
                                            currency="USD"
                                        />
                                    </Total>
                                </Td>
                            </Tr>
                        </tbody>
                    </Table>
                </Row>
                <Row>
                    <Status status={statusClass(0)}>
                        <Image
                            src={bake}
                            alt="bake"
                            style={{ width: '30px', height: '30px' }}
                        />
                        <span>Preparing</span>
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
                            src={bike}
                            alt="bike"
                            style={{ width: '30px', height: '30px' }}
                        />
                        <span>On the way</span>
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
                            src={delivered}
                            alt="delivered"
                            style={{ width: '30px', height: '30px' }}
                        />
                        <span>Delivered</span>
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
                            src={paid}
                            alt="paid"
                            style={{ width: '30px', height: '30px' }}
                        />
                        <span>Payment</span>
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
        </Container>
    );
};

export default Orders;
