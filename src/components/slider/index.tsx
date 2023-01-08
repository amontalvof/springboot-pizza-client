import { useState } from 'react';
import arrowl from '../../assets/img/arrowl.png';
import arrowr from '../../assets/img/arrowr.png';
import {
    Container,
    Image,
    Wrapper,
    ImgContainer,
    ArrowContainer,
} from './styles';

const images = [
    'https://res.cloudinary.com/a03m02f92/image/upload/v1673215327/pizzas/featured_rvaqjx.png',
    'https://res.cloudinary.com/a03m02f92/image/upload/v1673215337/pizzas/featured2_btwpss.png',
    'https://res.cloudinary.com/a03m02f92/image/upload/v1673215347/pizzas/featured3_otpsm0.png',
];

const Slider = () => {
    const [index, setIndex] = useState(0);

    const handleArrow = (direction: string) => {
        if (direction === 'left') {
            setIndex(index !== 0 ? index - 1 : 2);
        }
        if (direction === 'right') {
            setIndex(index !== 2 ? index + 1 : 0);
        }
    };

    return (
        <Container>
            <ArrowContainer
                style={{ left: 0 }}
                onClick={() => handleArrow('left')}
            >
                <Image src={arrowl} alt="arrow left" />
            </ArrowContainer>
            <Wrapper style={{ transform: `translateX(${-100 * index}vw)` }}>
                {images.map((image, i) => (
                    <ImgContainer key={`slider-image-${i}`}>
                        <Image src={image} alt="slider" />
                    </ImgContainer>
                ))}
            </Wrapper>
            <ArrowContainer
                style={{ right: 0 }}
                onClick={() => handleArrow('right')}
            >
                <Image src={arrowr} alt="arrow right" />
            </ArrowContainer>
        </Container>
    );
};

export default Slider;
