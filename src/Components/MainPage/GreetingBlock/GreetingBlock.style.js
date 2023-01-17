import styled from 'styled-components';
import { Colors } from '../../constants';

export const Section = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${props => (props.bgImage)});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 99;
    overflow: hidden;
`;

export const Blackout = styled.div`
    width: fit-content;
    height: 100%;
    position: relative;
    padding: 0 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    z-index: 98;

    &::before {
        content: '';
        position: absolute;
        width: 100vw;
        height: 100vh;
        backdrop-filter: brightness(0.8);
        z-index: -1;
    }

    &::after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        background: rgba(255, 0, 0, 0.3);
        transform-origin: 50% 55%;
        transform: skewX(-30deg);
        z-index: -1;
    }
`;

export const Title = styled.h1`
    font-size: 3.6rem;
    font-weight: 500;
    font-style: normal;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    color: ${props => props.color || Colors.white};
`;

export const Subtitle = styled.h2`
    font-size: 2.4rem;
    font-weight: 500;
    font-style: normal;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    color: ${props => props.color || Colors.lightyellow};
`;