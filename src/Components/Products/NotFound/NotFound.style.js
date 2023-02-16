import styled from "styled-components"
import { Font, Colors } from "../../constants"

export const Container = styled.div(props => ({
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",

    [`svg`]: {
        fill: Colors.darkred,
        width: Font.size.extralarge + "rem",
        height: Font.size.extralarge + "rem",
    },
}))

export const Message = styled.h2({
    fontSize: Font.size.large + "rem",
    letterSpacing: "0.1rem",
    color: Colors.darkred
})

export { Colors, Font }