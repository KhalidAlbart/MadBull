import { Header, Subtext, Description, Button } from "./Product_cart.style.js";
import { Container } from '../Container/Container.style.js';
import Icon from '../../Assets/Card_Button-Icon.png';
//import Counter from '../Counter/Counter'

export default function ProductCart() {
    return (
        <Container column>
            <Container margin='1.5rem' column gap='2.5rem'>
                <Header>Мясные чипсы MadBull</Header>
                <Subtext>Вес:<em>150 гр.</em></Subtext>
                <Subtext>Цена:<em>200 руб.</em></Subtext>
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Description>
                <Container>
                    <Button icon={Icon}></Button>
                </Container>
            </Container>
        </Container>
    )
}