import { Section, Blackout, Title, Subtitle } from "./GreetingBlock.style";
import Background from '../../Assets/GreetingBlockBG.png';

export default function Greeting(props) {
    return (
        <Section bgImage={Background}>
            <Blackout>
                <Title>Мясные изделия</Title>
                <Subtitle>У нас только халяль продукция</Subtitle>
            </Blackout>
        </Section>
    );
}