import styled from "styled-components";
import { Colors, Limits } from "../constants";
import { Container } from "../Container/Container.style";

export const Section = styled.section`
    position: relative;
    display: flex;
    width: 100%;
    height: fit-content;
    padding: 5rem;
    justify-content: center;
    align-items: center;
    background: ${Colors.white};
`;

export const RoundedImage = styled.img`
    border-radius: 50%;
    object-fit: contain;
    width: 50vmax;
    min-width: ${Limits.min}px;
    min-height: ${Limits.min}px;
    max-width: ${Limits.max}px;
    max-height: ${Limits.max}px;
`;

export const Description = styled.p`
    color: ${Colors.black};
    font-size: 2rem;
    letter-spacing: 0.1rem;
`;

export const Advantage = styled(Container)`
    background: ${Colors.white};

    &:nth-child(odd) ${RoundedImage} {
        order: 1;
    }

    &:nth-child(even) div * {
        align-self: flex-end;
        text-align: end;
    }
`;