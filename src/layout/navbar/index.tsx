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
    Text,
    Texts,
} from './styles';

const Navbar = () => {
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
                    <ListItem>Homepage</ListItem>
                    <ListItem>Products</ListItem>
                    <ListItem>Menu</ListItem>
                    <ListItem>Events</ListItem>
                    <ListItem>Blog</ListItem>
                    <ListItem>Contact</ListItem>
                </List>
            </Item>
            <Item>
                <Cart>
                    <Image src={cart} alt="cart" />
                    <Counter>2</Counter>
                </Cart>
            </Item>
        </Container>
    );
};

export default Navbar;
