import styled from "styled-components";

export const Section = styled.header`
    position: fixed;;
    width: 100%;
    z-index: 100;
`;

export const AnimatedLogo = styled.img`
    transition: 0.2s all linear;

    &:hover {
        filter: brightness(50%);
    }
`;