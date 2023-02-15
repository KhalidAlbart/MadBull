import styled from "styled-components"
import {Colors, Font} from "../constants"
import { Title, Container } from "../Products/Products.style"
import * as Template from "../Products/ProductCard/ProductCard.style"

export { Title, Container }

export const PTitle = styled(Template.PTitle)({})

export const PInfo = styled(Template.PInfo)({})

export const CBox = styled(Template.PBox).attrs(props => ({ view: false }))({
    maxWidth: "650px",
    maxHeight: "220px",
    position: "relative",

    [`img`]: {
        objectFit: "contain",
        maxHeight: "inherit",
        width: "auto"
    },

    [`svg#delete`]: {
        top: "2rem",
        right: "2rem",
        position: "absolute",
        width: Font.size.large + "rem",
        height: Font.size.large + "rem",
        zIndex: 1000,
        
        [`path`]: {
            fill: Colors.white,
            transition: "0.2s all linear",
        },

        [`:hover path`]: {
            fill: Colors.lightpink,
        },
    },

    [`@media (max-width: 575px)`]: {
        maxHeight: "fit-content",
        maxWidth: "310px",
        padding: "2.5rem",
    },
})

export const Section = styled.section({
    minHeight: "calc(100vh - 8.65rem)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "5rem",
})

export const EmptyCart = styled.h2({
    color: Colors.lightpink,
    fontSize: Font.size.large + "rem"
})

export const Total = styled.h3({
    textTransform: "uppercase",
    fontSize: Font.size.medium + "rem",
    fontWeight: Font.weight.semibold,
    color: Colors.darkred,
})

export const Info = styled(PInfo) ({
    color: Colors.black,
    cursor: 'default',
    
    [`em`]: {
        fontWeight: Font.weight.bold,
        color: Colors.darkred,
    },
})