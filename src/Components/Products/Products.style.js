import { Colors, Font, Limits } from "../constants"
import { Section } from "../Advantages/Advantages.style"
import { Container } from "../Container/Container.style"
import styled from "styled-components"

export { Limits, Colors, Container, Section }

export const Title = styled.h1({
    fontSize: Font.size.extralarge + "rem",
    letterSpacing: "0.1rem",
    color: Colors.darkred,
    textTransform: "uppercase",
    margin: 0
})