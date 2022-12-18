import PizzaCard from '../pizzaCard';
import { Container, Desc, Title, Wrapper } from './styles';

const PizzaList = () => {
    return (
        <Container>
            <Title>THE BEST PIZZA IN TOWN</Title>
            <Desc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                blandit arcu in pretium molestie. Interdum et malesuada fames
                acme. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Desc>
            <Wrapper>
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
            </Wrapper>
        </Container>
    );
};

export default PizzaList;
