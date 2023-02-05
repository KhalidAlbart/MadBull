import { Container } from "../Container/Container.style"
import Logo from "../../Assets/Logo.png"
import { Section, AnimatedLogo, Nav, Link } from "./Header.style.js"

export default function Header() {
    return (
        <>
            <Section>
                <Container justifyContent="center" alignItems="center" gap="5rem" padding="2.5rem">
                    <Nav className="Nav">
                        <Link to="../">Главная</Link>
                        <Link to="products">Магазин</Link>
                    </Nav>
                    <Link className="Logo" to="../">
                        <AnimatedLogo src={Logo} alt="logo"/>
                    </Link>
                    <Nav className="Nav">
                        <Link to="shoppingCard">Корзина</Link>
                        <Link to="contact">Контакты</Link>
                    </Nav>
                </Container>
            </Section>
        </>
    );
}