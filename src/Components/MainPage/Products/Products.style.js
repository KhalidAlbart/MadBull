import { Colors, Font } from "../../constants"
import { Section } from "../Advantages/Advantages.style"
import { Container } from "../../Container/Container.style"
import styled from "styled-components"

export { Colors, Container, Section }

export const Title = styled.h1({
    fontSize: Font.size.extralarge + "rem",
    letterSpacing: "0.1rem",
    color: Colors.darkred,
    textTransform: "uppercase"
})