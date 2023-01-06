import { useContext } from 'react';
import { StorageCartContext } from '../../context/storageCart';
import telephone from '../../assets/img/telephone.png';
import cart from '../../assets/img/cart.png';
import {
    CallButton,
    Cart,
    Container,
    Counter,
    Image,
    Item,
    List,
    ListItem,
    StyledLink,
    Text,
    Texts,
} from './styles';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const {
        state: { quantity },
    } = useContext(StorageCartContext);

    return (
        <Container>
            <Item>
                <CallButton>
                    <Image src={telephone} alt="call button" />
                </CallButton>
                <Texts>
                    <Text>ORDER NOW!</Text>
                    <Text>123 456 7890</Text>
                </Texts>
            </Item>
            <Item>
                <List>
                    <ListItem>
                        <StyledLink to="/">Homepage</StyledLink>
                    </ListItem>
                    <ListItem>
                        <StyledLink to="/admin">Admin</StyledLink>
                    </ListItem>
                </List>
            </Item>
            <Item>
                <Link to="/cart">
                    <Cart>
                        <Image src={cart} alt="cart" />
                        <Counter>{quantity}</Counter>
                    </Cart>
                </Link>
            </Item>
        </Container>
    );
};

export default Navbar;
