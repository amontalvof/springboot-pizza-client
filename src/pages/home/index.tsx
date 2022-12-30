import PizzaList from '../../components/pizzaList';
import { RenderIf } from '../../components/renderIf';
import Slider from '../../components/slider';
import { Spinner } from '../../components/spinner';
import useReadProducts from '../../hooks/useReadProducts';
import { Container } from './styles';

const Home = () => {
    const { isLoading: loadingProducts, data: pizzaList = [] } =
        useReadProducts('products');

    return (
        <Container>
            <Slider />
            <RenderIf isTrue={loadingProducts}>
                <Spinner size={100} text="Loading..." />
            </RenderIf>
            <RenderIf isTrue={!loadingProducts}>
                <PizzaList pizzaList={pizzaList} isLoading={loadingProducts} />
            </RenderIf>
        </Container>
    );
};

export default Home;
