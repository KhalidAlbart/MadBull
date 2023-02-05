import { Colors, Limits } from '../constants';
import { Container } from '../Container/Container.style';
import { Title, Subtitle } from '../GreetingBlock/GreetingBlock.style';
import { Section, Description, RoundedImage, Advantage } from './Advantages.style';

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
    const children = advantages.map((item, index) =>
        <AdvantageBlock key={'advantage_' + index} resource={item}/>
    );
    
    return (
        <Section>
            <Container maxWidth={Limits.containerMaxWidth} gap='5rem' background={Colors.white} column justifyContent='center' alignItems='center'>
                <Title color={Colors.darkred}>У нас</Title>
                {children}
            </Container>
        </Section>
    );
}

function AdvantageBlock(props) {
    var image = require(`../../Assets/${props.resource.image}.png`);

    return (
        <Advantage gap='2.5rem' alignItems='stretch'>
            <RoundedImage src={image}/>
            <Container column gap='2.5rem' background={Colors.white}>
                <Subtitle color={Colors.lightpink}>{props.resource.header}</Subtitle>
                <Description>{props.resource.desc}</Description>
            </Container>
        </Advantage>
    );
}