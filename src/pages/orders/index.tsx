import { FormattedNumber } from 'react-intl';
import { useParams } from 'react-router-dom';
import paid from '../../assets/img/paid.png';
import checked from '../../assets/img/checked.png';
import bake from '../../assets/img/bake.png';
import bike from '../../assets/img/bike.png';
import delivered from '../../assets/img/delivered.png';
import useReadOrder from '../../hooks/useReadOrder';
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
import { RenderIf } from '../../components/renderIf';
import { Spinner } from '../../components/spinner';
import IProduct from '../../types/product';
import { statusMap } from '../../constants/misc';

const Orders = () => {
    const { orderId = '' } = useParams();
    const { isLoading: loadingOrder, data = {} } = useReadOrder(
        `orders/${orderId}`
    );
    const { id, customer, phone, address, total, products, status } = data;
    const pizzas = products?.map((item: IProduct) => item.name)?.join(', ');

    const statusClass = (
        currentStatusValue: string,
        staticStatusValue: string
    ): string => {
        const staticIndex = statusMap.indexOf(staticStatusValue);
        const currentIndex = statusMap.indexOf(currentStatusValue);
        const index = currentIndex - staticIndex;
        if (currentStatusValue === 'PAYMENT') return 'done';
        if (index < 0) return 'undone';
        if (index === 0) return 'inProgress';
        if (index > 0) return 'done';
        return '';
    };

    return (
        <Container>
            <RenderIf isTrue={loadingOrder}>
                <Spinner size={100} text="Loading..." />
            </RenderIf>
            <RenderIf isTrue={!loadingOrder}>
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
                                        <Id>{id}</Id>
                                    </Td>
                                    <Td>
                                        <Cell>{customer}</Cell>
                                    </Td>
                                    <Td>
                                        <Cell>{phone}</Cell>
                                    </Td>
                                    <Td>
                                        <Cell>{address}</Cell>
                                    </Td>
                                    <Td>
                                        <Cell>{pizzas}</Cell>
                                    </Td>
                                    <Td>
                                        <Total>
                                            <FormattedNumber
                                                value={total}
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
                        <Status status={statusClass(status, 'PREPARING')}>
                            <Image
                                src={bake}
                                alt="bake"
                                style={{ width: '30px', height: '30px' }}
                            />
                            <span>Preparing</span>
                            <div>
                                <CheckedImage
                                    status={statusClass(status, 'PREPARING')}
                                    src={checked}
                                    alt="checked"
                                    style={{ width: '20px', height: '20px' }}
                                />
                            </div>
                        </Status>
                        <Status status={statusClass(status, 'ON_THE_WAY')}>
                            <Image
                                src={bike}
                                alt="bike"
                                style={{ width: '30px', height: '30px' }}
                            />
                            <span>On the way</span>
                            <div>
                                <CheckedImage
                                    status={statusClass(status, 'ON_THE_WAY')}
                                    src={checked}
                                    alt="checked"
                                    style={{ width: '20px', height: '20px' }}
                                />
                            </div>
                        </Status>
                        <Status status={statusClass(status, 'DELIVERED')}>
                            <Image
                                src={delivered}
                                alt="delivered"
                                style={{ width: '30px', height: '30px' }}
                            />
                            <span>Delivered</span>
                            <div>
                                <CheckedImage
                                    status={statusClass(status, 'DELIVERED')}
                                    src={checked}
                                    alt="checked"
                                    style={{ width: '20px', height: '20px' }}
                                />
                            </div>
                        </Status>
                        <Status status={statusClass(status, 'PAYMENT')}>
                            <Image
                                src={paid}
                                alt="paid"
                                style={{ width: '30px', height: '30px' }}
                            />
                            <span>Payment</span>
                            <div>
                                <CheckedImage
                                    status={statusClass(status, 'PAYMENT')}
                                    src={checked}
                                    alt="checked"
                                    style={{ width: '20px', height: '20px' }}
                                />
                            </div>
                        </Status>
                    </Row>
                </Left>
            </RenderIf>
        </Container>
    );
};

export default Orders;
