import React, { useState } from "react"
import Logo from "../../Assets/Logo.png"
import { HiMenu, HiX } from "react-icons/hi"
import { Section, Container, AnimatedLogo, Nav, Link } from "./Header.style.js"

export default function Header() {
    const [ toggle, setToggle ] = useState(false)

    const handleClick = () => {
        setToggle(!toggle)

        if (!toggle) {
            showMenu()
        } else {
            hideMenu()
        }
    }

    return (
        <Section>
            <Container>
                <Nav className="Nav">
                    <Link to="../">Главная</Link>
                    <Link to="products">Магазин</Link>
                </Nav>
                <Link className="Logo" to="../"><AnimatedLogo src={Logo} alt="logo"/></Link>
                
                { 
                    toggle 
                    ? <HiX className="menu-toggler" onClick={ handleClick } /> 
                    : <HiMenu className="menu-toggler" onClick={ handleClick } /> 
                }
                
                <Nav className="Nav">
                    <Link to="shoppingCard">Корзина</Link>
                    <Link to="contact">Контакты</Link>
                </Nav>
            </Container>
        </Section>
    )
}

function showMenu() {
    const container = document.createElement("div")
    const nav = document.querySelectorAll(".Nav")    
    const targetNode = document.querySelector(".header>div")

    targetNode.style.height = window.innerHeight + "px"
    container.classList.add("menu")

    nav.forEach(element => {
        let clone = element.cloneNode(true)
        container.appendChild(clone)
    })

    targetNode.appendChild(container)
}

function hideMenu() {
    const header = document.querySelector(".header>div")
    const menu = document.querySelector(".menu")

    header.style.height = "auto"
    menu && menu.remove()
}