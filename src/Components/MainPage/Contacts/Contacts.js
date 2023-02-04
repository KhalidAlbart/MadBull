import React from "react"
import { Container, Section, Title, Subtitle, Wrap, Text } from "./Contacts.style"

export default function Contacts(props) {
    return (
        <Section>
            <Container column background="inherit" gap="2.5rem">
                <Title>Контакты</Title>
                <Wrap>
                    <Text>+7(999)-999-99-99</Text>
                    <Text>example@mail.com</Text>
                    <Text>Красноармейская ул., 110, Центральный внутригородской округ, 
    микрорайон Центральный, Краснодар</Text>
                </Wrap>
                <Subtitle>По вопросам сотрудничества:</Subtitle>
                <Wrap>
                    <Text>+7(999)-999-99-99</Text>
                    <Text>example@mail.com</Text>
                    <Text>Красноармейская ул., 110, Центральный внутригородской округ, 
    микрорайон Центральный, Краснодар</Text>
                </Wrap>
                <iframe title="our-location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2819.5035702589953!2d38.972171933416845!3d45.03500210315323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f04f984dde6c89%3A0xae9ec8d74f5204dc!2z0JrRgNCw0YHQvdC-0LDRgNC80LXQudGB0LrQsNGPINGD0LsuLCAxMTAsINCa0YDQsNGB0L3QvtC00LDRgCwg0JrRgNCw0YHQvdC-0LTQsNGA0YHQutC40Lkg0LrRgNCw0LksIDM1MDAwMA!5e0!3m2!1sru!2sru!4v1675504006873!5m2!1sru!2sru"
                    width="400" height="300" style={{border: 0}} 
                    allowFullScreen="" loading="eager" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </Container>
        </Section>
    )
}   