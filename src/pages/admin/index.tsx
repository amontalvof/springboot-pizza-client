import { FormattedNumber } from 'react-intl';
import { RenderIf } from '../../components/renderIf';
import { Spinner } from '../../components/spinner';
import { statusMap } from '../../constants/misc';
import toCapitalized from '../../helpers/toCapitalized';
import useDeleteProduct from '../../hooks/useDeleteProduct';
import useReadProducts from '../../hooks/useReadProducts';
import useUpdateOrder from '../../hooks/useUpdateOrder';
import { IOrderExtended } from '../../types/order';
import IPizza from '../../types/pizza';
import useReadOrders from '../../hooks/useReadOrders';
import {
    Container,
    Image,
    Item,
    Title,
    Table,
    Button,
    Th,
    Td,
    Desc,
    Tr,
    Id,
    Name,
    Customer,
    Price,
    Status,
} from './styles';
import { GREEN } from '../../constants/colors';

const Admin = () => {
    const { isLoading: loadingProducts, data: pizzaList = [] } =
        useReadProducts('products');
    const { isLoading: loadingOrders, data: orderList = [] } =
        useReadOrders('orders');
    const isLoading = loadingProducts || loadingOrders;
    const { mutate: deleteProductMutate } = useDeleteProduct();
    const { mutate: updateOrderMutate } = useUpdateOrder();

    const handleDelete = (id: number) => {
        deleteProductMutate({ productId: id });
    };

    const handleStatus = (id: number, order: IOrderExtended) => {
        const { status } = order;
        const index = statusMap.indexOf(status);
        const nextStatus = statusMap[index + 1];
        updateOrderMutate({
            orderId: id,
            order: { ...order, status: nextStatus },
        });
    };

    return (
        <Container>
            <RenderIf isTrue={isLoading}>
                <Spinner size={100} text="Loading..." />
            </RenderIf>
            <RenderIf isTrue={!isLoading}>
                <>
                    <Item>
                        <Title>Products</Title>
                        <Table>
                            <tbody>
                                <Tr>
                                    <Th>Image</Th>
                                    <Th>Title</Th>
                                    <Th>Description</Th>
                                    <Th>Actions</Th>
                                </Tr>
                                {pizzaList.map((pizza: IPizza) => (
                                    <Tr key={`pizza-${pizza.id}`}>
                                        <Td>
                                            <Image
                                                src={pizza.img}
                                                alt="pizza"
                                            />
                                        </Td>
                                        <Td>
                                            <Name>{pizza.title}</Name>
                                        </Td>
                                        <Td>
                                            <Desc title={pizza.description}>
                                                {pizza.description}
                                            </Desc>
                                        </Td>
                                        <Td>
                                            {/* <Button>Edit</Button> */}
                                            <Button
                                                onClick={() =>
                                                    handleDelete(pizza.id)
                                                }
                                                disabled
                                            >
                                                Delete
                                            </Button>
                                        </Td>
                                    </Tr>
                                ))}
                            </tbody>
                        </Table>
                    </Item>
                    <Item>
                        <Title>Orders</Title>
                        <Table>
                            <tbody>
                                <Tr>
                                    <Th>Id</Th>
                                    <Th>Customer</Th>
                                    <Th>Pizzas</Th>
                                    <Th>Total</Th>
                                    <Th>Status</Th>
                                    <Th>Actions</Th>
                                </Tr>
                                {orderList.map((order: IOrderExtended) => {
                                    const pizzas = order.products
                                        .map((item: any) => item.name)
                                        .join(', ');
                                    const buttonStyle =
                                        order.status === 'PAYMENT'
                                            ? {
                                                  cursor: 'not-allowed',
                                                  backgroundColor: GREEN,
                                              }
                                            : { backgroundColor: GREEN };
                                    return (
                                        <Tr key={`order-${order.id}`}>
                                            <Td>
                                                <Id>{order.id}</Id>
                                            </Td>
                                            <Td>
                                                <Customer>
                                                    {order.customer}
                                                </Customer>
                                            </Td>
                                            <Td>
                                                <Desc title={pizzas}>
                                                    {pizzas}
                                                </Desc>
                                            </Td>
                                            <Td>
                                                <Price>
                                                    <FormattedNumber
                                                        value={order.total}
                                                        // eslint-disable-next-line react/style-prop-object
                                                        style="currency"
                                                        currency="USD"
                                                    />
                                                </Price>
                                            </Td>
                                            <Td>
                                                <Status>
                                                    {toCapitalized(
                                                        order.status.replace(
                                                            /_/g,
                                                            ' '
                                                        )
                                                    )}
                                                </Status>
                                            </Td>
                                            <Td>
                                                <Button
                                                    disabled={
                                                        order.status ===
                                                        'PAYMENT'
                                                    }
                                                    style={buttonStyle}
                                                    onClick={() =>
                                                        handleStatus(
                                                            order.id,
                                                            order
                                                        )
                                                    }
                                                >
                                                    Next Stage
                                                </Button>
                                            </Td>
                                        </Tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </Item>
                </>
            </RenderIf>
        </Container>
    );
};

export default Admin;
