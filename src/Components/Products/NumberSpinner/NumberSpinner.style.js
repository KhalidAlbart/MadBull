import styled from "styled-components"
import { Font, Colors } from "../../constants"
import * as Template from "../SearchField/SearchField.style"

export { Font, Colors }

export const Operator = styled(Template.Button)({});

export const Input = styled(Template.Input)`
color: ${Colors.white};
text-align: center;
`;

export const SpinnerBox = styled(Template.Wrap)`
    background: transparent;
    max-width: fit-content;
    gap: 1rem;
    border-bottom: 2px solid ${Colors.lightpink};
    align-items: center;
`;