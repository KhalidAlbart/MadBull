import { Container } from "../Container/Container.style";
import Logo from "../../Assets/Logo.png";
import Nav from "./Nav/Nav";
import { Section, AnimatedLogo } from "./Header.style.js";
import { Link, Outlet } from "react-router-dom";

export default function Header() {
    return (
        <>
            <Section>
                <Container justifyContent="center" alignItems="center" gap="2.5rem" padding="2.5rem">
                    <Nav refs={["../", "products"]} links={["Главная", "Товары"]} />
                    <Link to="../"><AnimatedLogo src={Logo} alt="logo"/></Link>
                    <Nav refs={["shoppingCard", "contact"]} links={["Корзина", "Контакты"]} />
                </Container>
            </Section>
            <Outlet />
        </>
    );
}