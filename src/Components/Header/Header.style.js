import styled from "styled-components"
import { Link as Template } from "react-router-dom"
import { Colors, Font } from "../constants";

export const Section = styled.header`
    top: 0;
    position: sticky;
    width: 100%;
    z-index: 100;
`;

export const AnimatedLogo = styled.img`
    transition: 0.2s all linear;

    &:hover {
        filter: brightness(50%);
    }
`;

export const Nav = styled.nav({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2.5rem",
})

export const Link = styled(Template)({
    textDecoration: "none",
    color: Colors.white,
    fontSize: Font.size.medium + "rem",
    textTransform: "uppercase",
    transition: "0.2s all linear",
    lineHeight: Font.size.medium + "rem",

    [`:hover`]: {
        color: Colors.lightpink,
    },
})