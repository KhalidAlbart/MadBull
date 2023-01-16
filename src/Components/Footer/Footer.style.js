import styled from "styled-components";
import { Colors } from "../constants";

export const Section = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Copyright = styled.em`
    font-weight: 400;
    font-size: 2rem;
    letter-spacing: 0.1rem;
    color: ${Colors.white};
    font-style: normal;
`;