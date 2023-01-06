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
} from './styles';

// TODO: make admin responsive

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
                                <tr>
                                    <Th>Image</Th>
                                    <Th>Title</Th>
                                    <Th>Description</Th>
                                    <Th>Actions</Th>
                                </tr>
                                {pizzaList.map((pizza: IPizza) => (
                                    <tr key={`pizza-${pizza.id}`}>
                                        <Td>
                                            <Image
                                                src={pizza.img}
                                                alt="pizza"
                                            />
                                        </Td>
                                        <Td>{pizza.title}</Td>
                                        <Td>
                                            <Desc title={pizza.description}>
                                                {pizza.description}
                                            </Desc>
                                        </Td>
                                        <Td>
                                            <Button>Edit</Button>
                                            <Button
                                                onClick={() =>
                                                    handleDelete(pizza.id)
                                                }
                                            >
                                                Delete
                                            </Button>
                                        </Td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Item>
                    <Item>
                        <Title>Orders</Title>
                        <Table>
                            <tbody>
                                <tr>
                                    <Th>Id</Th>
                                    <Th>Customer</Th>
                                    <Th>Pizzas</Th>
                                    <Th>Total</Th>
                                    <Th>Status</Th>
                                    <Th>Actions</Th>
                                </tr>
                                {orderList.map((order: IOrderExtended) => {
                                    const pizzas = order.products
                                        .map((item: any) => item.name)
                                        .join(', ');
                                    const buttonStyle =
                                        order.status === 'PAYMENT'
                                            ? {
                                                  cursor: 'not-allowed',
                                              }
                                            : {};
                                    return (
                                        <tr key={`order-${order.id}`}>
                                            <Td>{order.id}</Td>
                                            <Td>{order.customer}</Td>
                                            <Td>
                                                <Desc title={pizzas}>
                                                    {pizzas}
                                                </Desc>
                                            </Td>
                                            <Td>
                                                <FormattedNumber
                                                    value={order.total}
                                                    // eslint-disable-next-line react/style-prop-object
                                                    style="currency"
                                                    currency="USD"
                                                />
                                            </Td>
                                            <Td>
                                                {toCapitalized(
                                                    order.status.replace(
                                                        /_/g,
                                                        ' '
                                                    )
                                                )}
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
                                        </tr>
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
