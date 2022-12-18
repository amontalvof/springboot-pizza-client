import { useState } from 'react';
import { FormattedNumber } from 'react-intl';
import pizza from '../../assets/img/pizza.png';
import sizeImg from '../../assets/img/size_color.png';
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
    Size,
    Number,
    Option,
    Ingredients,
    Label,
    Input,
    Add,
    Quantity,
    Button,
} from './styles';

const pizzaObj = {
    id: 1,
    name: 'CAMPAGNOLA',
    description: 'Tomato sauce, mozzarella, ham, mushrooms, artichokes, olives',
    prices: [9.99, 12.99, 15.99],
    img: pizza,
};

const Product = () => {
    const [price, setPrice] = useState(pizzaObj.prices[0]);
    const [size, setSize] = useState(0);

    const handleSize = (sizeIndex: number) => {
        const difference = pizzaObj.prices[sizeIndex] - pizzaObj.prices[size];
        setSize(sizeIndex);
        changePrice(difference);
    };

    const changePrice = (number: number) => {
        setPrice(price + number);
    };

    return (
        <Container>
            <Left>
                <ImgContainer>
                    <Image src={pizzaObj.img} alt={pizzaObj.name} />
                </ImgContainer>
            </Left>
            <Right>
                <Title>{pizzaObj.name}</Title>
                <Price>
                    <FormattedNumber
                        value={pizzaObj.prices[size]}
                        // eslint-disable-next-line react/style-prop-object
                        style="currency"
                        currency="USD"
                    />
                </Price>
                <Desc>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Non nesciunt labore dolore! Pariatur perferendis repellat
                    consectetur consequatur libero, quibusdam quam nulla quae
                    accusantium distinctio incidunt est tempore deserunt.
                    Possimus, voluptatum.
                </Desc>
                <Choose>Choose your size</Choose>
                <Sizes>
                    <Size onClick={() => handleSize(0)}>
                        <Image src={sizeImg} alt="small" />
                        <Number>Small</Number>
                    </Size>
                    <Size onClick={() => handleSize(1)}>
                        <Image src={sizeImg} alt="small" />
                        <Number>Medium</Number>
                    </Size>
                    <Size onClick={() => handleSize(2)}>
                        <Image src={sizeImg} alt="small" />
                        <Number>Large</Number>
                    </Size>
                </Sizes>
                <Choose>Choose additional ingredients</Choose>
                <Ingredients>
                    <Option>
                        <Input type="checkbox" id="double" name="double" />
                        <Label htmlFor="double">Double Ingredients</Label>
                    </Option>
                    <Option>
                        <Input type="checkbox" id="cheese" name="cheese" />
                        <Label htmlFor="cheese">Extra Cheese</Label>
                    </Option>
                    <Option>
                        <Input type="checkbox" id="spicy" name="spicy" />
                        <Label htmlFor="spicy">Spicy Sauce</Label>
                    </Option>
                    <Option>
                        <Input type="checkbox" id="garlic" name="garlic" />
                        <Label htmlFor="garlic">Garlic Sauce</Label>
                    </Option>
                </Ingredients>
                <Add>
                    <Quantity type="number" defaultValue={1} min={1} />
                    <Button>Add to Cart</Button>
                </Add>
            </Right>
        </Container>
    );
};

export default Product;
