import styled from '@emotion/styled';
import { Colors } from '../variables';

export const Header = styled.h1`
    font-family: 'Alegreya';
    font-style: normal;
    font-weight: 400;
    font-size: 1.8rem;
    text-transform: uppercase;
    color: ${Colors.headerColor};
`;

export const Subtext = styled.p`
    font-family: 'Alegreya';
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    text-transform: uppercase;
    color: ${Colors.basicColor};

    em {
        font-style: normal;
        color: ${Colors.importantColor};
        text-transform: none;
        font-feature-settings: 'tnum' on, 'lnum' on;
    }
`;

export const Description = styled.p`
    font-family: 'Alegreya';
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    word-wrap: break-word;
    color: ${Colors.basicColor};
`;

export const Button = styled.button`
    width: 35px;
    height: 35px;
    border: 2px solid ${Colors.importantColor};
    border-radius: 5px;
    background: none;
    background-image: url(${props => props.icon});
    background-size: 80%;
    background-repeat: no-repeat;
    background-position: center;  
    cursor: pointer;
    image-rendering: normal;
    transform-origin: 50% 50%;
    transition: 0.1s all linear;

    &:hover{
        transform: scale(1.1);
        filter: hue-rotate(-30deg);
    }  
`;