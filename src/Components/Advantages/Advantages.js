import { Colors, Limits } from '../constants';
import { Section, Description, RoundedImage, Advantage, Container, Title, Subtitle } from './Advantages.style';

const advantages = [
    {
        header: 'Мясо высокого качества',
        image: 'Bulls',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim , quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        header: 'Широкий ассортимент',
        image: 'Assortiment',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim , quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        header: 'Современное производство',
        image: 'Production',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim , quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
]

export default function Advantages(props) {
    const items = advantages.map((item, index) =>
        <AdvantageBlock key={'advantage_' + index} data={item}/>
    );
    
    return (
        <Section>
            <Container maxWidth={Limits.containerMaxWidth} gap='5rem' background={Colors.white} column justifyContent='center' alignItems='center'>
                <Title color={Colors.darkred}>У нас</Title>
                { items }
            </Container>
        </Section>
    );
}

function AdvantageBlock(props) {
    var image = require(`../../Assets/${props.data.image}.png`);

    return (
        <Advantage gap='2.5rem' alignItems='stretch'>
            <RoundedImage src={image}/>
            <Container column gap='2.5rem' background={Colors.white}>
                <Subtitle color={Colors.lightpink}>{props.data.header}</Subtitle>
                <Description>{props.data.desc}</Description>
            </Container>
        </Advantage>
    );
}