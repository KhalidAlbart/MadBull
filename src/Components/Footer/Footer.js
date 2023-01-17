import { Container } from "../Container/Container.style";
import { Section, Copyright } from './Footer.style';

export default function Footer(props) {
    return (
        <Section>
            <Container justifyContent='center' alignContent='center' padding='2.5rem' >
                <Copyright>&#169; ALBART Studio</Copyright>
            </Container>
        </Section>
    )
}