import IPizza from '../../types/pizza';
import PizzaCard from '../pizzaCard';
import { RenderIf } from '../renderIf';
import { Container, Desc, Title, Wrapper } from './styles';

const PizzaList = ({
    pizzaList,
    isLoading,
}: {
    pizzaList: IPizza[];
    isLoading: boolean;
}) => {
    return (
        <Container>
            <Title>THE BEST PIZZA IN TOWN</Title>
            <Desc>
                Our pizzas are made with only the freshest and highest-quality
                ingredients, including hand-tossed dough, homemade sauce, and a
                variety of delicious toppings. We pride ourselves on our
                attention to detail and commitment to excellence, ensuring that
                every pie we serve is absolutely delicious.
            </Desc>
            <Wrapper>
                <RenderIf isTrue={!isLoading}>
                    <>
                        {pizzaList.map((pizza: IPizza) => (
                            <PizzaCard
                                pizza={pizza}
                                key={`pizza-${pizza.id}`}
                            />
                        ))}
                    </>
                </RenderIf>
            </Wrapper>
        </Container>
    );
};

export default PizzaList;
