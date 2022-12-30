import { Card, Container, Image, Item, Motto, Text, Title } from './styles';
import bg from '../../assets/img/bg.png';

const Footer = () => {
    return (
        <Container>
            <Item>
                <Image src={bg} alt="background" />
            </Item>
            <Item>
                <Card>
                    <Motto>
                        OH YES, WE DID. THE BEST PIZZA, WELL BAKED SLICE OF
                        PIZZA.
                    </Motto>
                </Card>
                <Card>
                    <Title>FIND OUR RESTAURANTS</Title>
                    <Text>
                        1654 R. Don Road #304.
                        <br /> NewYork, 85022
                        <br /> (602) 867-1010
                    </Text>
                    <Text>
                        2356 K. Laquie Rd #235.
                        <br /> NewYork, 85022
                        <br /> (602) 867-1011
                    </Text>
                    <Text>
                        1614 E. Erwin St #104.
                        <br /> NewYork, 85022
                        <br /> (602) 867-1012
                    </Text>
                    <Text>
                        1614 W. Caroll St #125.
                        <br /> NewYork, 85022
                        <br /> (602) 867-1013
                    </Text>
                </Card>
                <Card>
                    <Title>WORKING HOURS</Title>
                    <Text>
                        MONDAY UNTIL FRIDAY
                        <br /> 9:00 – 22:00
                    </Text>
                    <Text>
                        SATURDAY - SUNDAY
                        <br /> 12:00 – 24:00
                    </Text>
                </Card>
            </Item>
        </Container>
    );
};

export default Footer;
