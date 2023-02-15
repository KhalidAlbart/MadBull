import styled from "styled-components"
import { Colors, Limits } from "../constants"
import { Container } from "../Container/Container.style"
import { Title, Subtitle } from '../GreetingBlock/GreetingBlock.style';

export { Container, Title, Subtitle }

export const Section = styled.section({
    position: "relative",
    display: "flex",
    width: "100%",
    height: "fit-content",
    padding: "5rem",
    justifyContent: "center",
    alignItems: "center",
    background: Colors.white,

    // @media queries 
    [`@media (max-width: 775px)`]: {
        padding: " 5rem 2.5rem",
    },
})

export const RoundedImage = styled.img({
    borderRadius: "50%",
    objectFit: "contain",
    width: "50%",
    height: "50%",
    minWidth: Limits.min + "px",
    minHeight: Limits.min + "px",
    maxWidth: Limits.max + "px",
    maxHeight: Limits.max + "px",
})

export const Description = styled.p({
    color: Colors.black,
    fontSize: "2rem",
    letterSpacing: "0.1rem",
})

export const Advantage = styled(Container)({
    background: Colors.white,

    [`&:nth-child(odd) ${RoundedImage}`]: {
        order: 1,
    },

    [`&:nth-child(even) div *`]: {
        alignSelf: "flex-end",
        textAlign: "end",
    },

    // @media queries 
    [`@media (max-width: 600px)`]: {
        flexDirection: "column",
        alignItems: "center",

        [`&:nth-child(odd) ${RoundedImage}`]: {
            order: 0,
        },

        [`&:nth-child(even) div *, div *`]: {
            alignSelf: "center",
            textAlign: "center",
        },
    },
})