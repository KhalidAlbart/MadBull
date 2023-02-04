import styled from "styled-components"
import * as Template from "../../Container/Container.style"
import { Limits, Font, Colors } from "../../constants"


const fontMixin = {
    fontFeatureSettings: "'pnum' on,'lnum' on",
    letterSpacing: "0.1rem",
    fontStyle: "normal",
}

export const Wrap = styled.div({
    display: "flex",
    gap: "1.5rem",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    maxWidth: "625px"
})

export const Container = styled(Template.Container)(props => ({
    maxWidth: Limits.containerMaxWidth,
    [`h1`]: {
        margin: 0
    }
}))

export const Section = styled.section(props => ({
    width: "100%",
    height: "fit-content",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "5rem",
    minHeight: "92vh"
}))

export const Title = styled.h1(props => ({
    fontSize: Font.size.extralarge + "rem",
    fontWeight: Font.weight.bold,
    color: Colors.darkred,
    textTransform: "uppercase",
}), fontMixin)

export const Subtitle = styled.h2(props => ({
    fontSize: Font.size.medium + "rem",
    color: Colors.darkred,
    textTransform: "uppercase",
}), fontMixin)

export const Text = styled.p({
    fontSize: Font.size.normal + "rem",
    color: Colors.black,
    fontWeight: Font.weight.regular,
}, fontMixin)