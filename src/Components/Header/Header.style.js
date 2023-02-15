import styled from "styled-components"
import { Link as LinkTemplate } from "react-router-dom"
import { Colors, Font } from "../constants"
import { Container as DivTemplate } from "../Container/Container.style"

export const Container = styled(DivTemplate)({
    justifyContent: "center",
    alignItems: "center",
    gap: "5rem",
    padding: "2.5rem",
    flexWrap: "wrap",
})

export const Section = styled.header.attrs({
    className: "header"
})({
    top: 0,
    position: "sticky",
    width: "100%",
    zIndex: 100,

    [`.menu`]: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "2.5rem",
    },
      
    [`.menu .Nav`]: {
        flexDirection: "column",
    },

    [`.menu-toggler`]: {
        display: "none",
        fill: Colors.white,
        width: Font.size.extralarge + "rem",
        height: Font.size.extralarge + "rem",
        cursor: "pointer",
        transition: "0.2s all linear",

        [`:hover`]: {
            fill: Colors.lightpink,
            transform: "scale(0.8)",
        }
    },

    [`@media (max-width: 775px)`]: {
        [`.menu-toggler`]: {
            display: "flex",
        },

        [`& > div > .Nav`]: {
            display: "none",
        },

        [`&>div`]: {
            gap: 0,
            justifyContent: "space-between"
        },
    },

    [`@media (min-width: 776px)`]: {
        [`.menu`]: {
            display: "none",
        },
    },
})

export const AnimatedLogo = styled.img({
    transition: "0.2s all linear",
    cursor: "pointer",

    [`&:hover`]: {
        filter: "brightness(50%)",
    },
})

export const Nav = styled.nav({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2.5rem",
})

export const Link = styled(LinkTemplate)({
    display: "flex",
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