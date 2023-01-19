import styled from "styled-components";
import { Colors, Font } from "../../constants";
import { Button } from "./SearchField/SearchField.style";
import { Container } from "../../Container/Container.style";

export { Colors, Font, Button };

export const StyledContainer = styled(Container)`
    border-bottom: ${props => props.borderless ? 'none' : '2px solid' + (props.bColor ? props.bColor : Colors.darkred)};
    background: transparent;
`;