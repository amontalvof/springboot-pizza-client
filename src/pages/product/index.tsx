import { ChangeEvent, useContext, useEffect, useMemo, useReducer } from 'react';
import { FormattedNumber } from 'react-intl';
import { useParams } from 'react-router-dom';
import sizeImg from '../../assets/img/size_color.png';
import { RenderIf } from '../../components/renderIf';
import { Spinner } from '../../components/spinner';
import useReadProduct from '../../hooks/useReadProduct';
import { Size } from './styles';
import IExtraOption from '../../types/extraOptions';
import reducer from './reducer';
import resolvePrices from './resolvePrices';
import {
    Container,
    Image,
    ImgContainer,
    Left,
    Right,
    Title,
    Price,
    Desc,
    Choose,
    Sizes,
    Number,
    Option,
    Ingredients,
    Label,
    Input,
    Add,
    Quantity,
    Button,
} from './styles';
import { StorageCartContext } from '../../context/storageCart';

const sizeMap = ['Small', 'Medium', 'Large'];

const Product = () => {
    const {
        reducers: { addProduct },
    } = useContext(StorageCartContext);
    const { productId = '' } = useParams();
    const { isLoading: loadingProduct, data: valueProduct = {} } =
        useReadProduct(`products/${productId}`);

    const prices = useMemo(
        () => resolvePrices(valueProduct?.prices),
        [valueProduct?.prices]
    );

    const initialState = {
        price: prices[0],
        size: 'Small',
        extras: [],
        quantity: 1,
    };

    const extraOptions = valueProduct?.extraOptions || [];
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSize = (sizeName: string) => {
        const difference =
            prices[sizeMap.indexOf(sizeName)] -
            prices[sizeMap.indexOf(state.size)];
        dispatch({ type: 'SET_SIZE', payload: { size: sizeName } });
        changePrice(difference);
    };

    const changeName = (name: string) => {
        dispatch({
            type: 'SET_NAME',
            payload: {
                name,
            },
        });
    };

    const changeImage = (image: string) => {
        dispatch({
            type: 'SET_IMG',
            payload: {
                image,
            },
        });
    };

    const changeId = (id: number) => {
        dispatch({
            type: 'SET_ID',
            payload: {
                id,
            },
        });
    };

    const changePrice = (number: number, isFromEffect?: boolean) => {
        dispatch({
            type: 'SET_PRICE',
            payload: {
                price: isFromEffect ? number : state.price + number,
            },
        });
    };

    const handleOption = (
        event: ChangeEvent<HTMLInputElement>,
        option: IExtraOption
    ) => {
        const { checked } = event.target;

        if (checked) {
            changePrice(option.price);
            dispatch({
                type: 'SET_EXTRAS',
                payload: { extras: [...state.extras, option] },
            });
        } else {
            changePrice(-option.price);
            dispatch({
                type: 'SET_EXTRAS',
                payload: {
                    extras: state.extras.filter(
                        (item: IExtraOption) => item.id !== option.id
                    ),
                },
            });
        }
    };

    const handleQuantity = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'SET_QUANTITY',
            payload: { quantity: event.target.valueAsNumber },
        });
    };

    const handleAddToCart = () => {
        addProduct(state);
    };

    useEffect(() => {
        changePrice(prices[0], true);
        changeName(valueProduct.title);
        changeImage(valueProduct.img);
        changeId(valueProduct.id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [prices]);

    return (
        <Container>
            <RenderIf isTrue={loadingProduct}>
                <Spinner size={100} text="Loading..." />
            </RenderIf>
            <RenderIf isTrue={!loadingProduct}>
                <>
                    <Left>
                        <ImgContainer>
                            <Image
                                src={valueProduct.img}
                                alt={valueProduct.title}
                            />
                        </ImgContainer>
                    </Left>
                    <Right>
                        <Title>{valueProduct.title}</Title>
                        <Price>
                            <FormattedNumber
                                value={state.price}
                                // eslint-disable-next-line react/style-prop-object
                                style="currency"
                                currency="USD"
                            />
                        </Price>
                        <Desc>{valueProduct.description}</Desc>
                        <Choose>Choose your size</Choose>
                        <Sizes>
                            {sizeMap.map((sizeName, index) => (
                                <Size
                                    key={`size-${sizeName}`}
                                    onClick={() => handleSize(sizeName)}
                                >
                                    <Image src={sizeImg} alt="small" />
                                    <Number>{sizeName}</Number>
                                </Size>
                            ))}
                        </Sizes>
                        <RenderIf isTrue={extraOptions.length > 0}>
                            <>
                                <Choose>Choose additional ingredients</Choose>
                                <Ingredients>
                                    {extraOptions.map(
                                        (option: IExtraOption) => (
                                            <Option key={`option-${option.id}`}>
                                                <Input
                                                    type="checkbox"
                                                    id={option.name}
                                                    name={option.name}
                                                    onChange={(e) =>
                                                        handleOption(e, option)
                                                    }
                                                />
                                                <Label htmlFor={option.name}>
                                                    {option.text}
                                                </Label>
                                            </Option>
                                        )
                                    )}
                                </Ingredients>
                            </>
                        </RenderIf>
                        <Add>
                            <Quantity
                                type="number"
                                min={1}
                                value={state.quantity}
                                onChange={handleQuantity}
                            />
                            <Button onClick={handleAddToCart}>
                                Add to Cart
                            </Button>
                        </Add>
                    </Right>
                </>
            </RenderIf>
        </Container>
    );
};

export default Product;
