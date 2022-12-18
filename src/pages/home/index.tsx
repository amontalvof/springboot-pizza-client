import PizzaList from '../../components/pizzaList';
import Slider from '../../components/slider';
import { Container } from './styles';

const Home = () => {
    return (
        <Container>
            <Slider />
            <PizzaList />
        </Container>
    );
};

export default Home;
