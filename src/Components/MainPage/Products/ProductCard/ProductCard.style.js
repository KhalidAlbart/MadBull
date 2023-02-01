import styled from "styled-components";
import { Colors, Font } from '../../../constants';
import { Container } from "../../../Container/Container.style";
import * as Template from '../SearchField/SearchField.style';

const fontMixin = `
    font-style: normal;
    letter-spacing: 0.1rem;
    font-feature-settings: 'pnum' on, 'lnum' on;
`;

export { Colors, Font };

export const PTitle = styled.h2`
    font-size: ${Font.size.normal}rem;
    color: ${Colors.lightyellow};
    text-transform: uppercase;
    font-weight: ${Font.weight.regular};
    ${fontMixin}
`;

export const PInfo = styled.p`
    display: ${props => props.hide ? 'none' : 'block' };
    font-size: ${Font.size.smoll}rem;
    color: ${Colors.white};
    font-weight: ${Font.weight.regular};
    text-transform: ${props => props.noTransform ? 'normal' : 'uppercase'};
    ${fontMixin}

    & em {
        ${fontMixin}
        text-transform: none;
        color: ${Colors.lightpink}
    }
`;

export const Input = styled(Template.Input)`
    color: ${Colors.white};
    text-align: center;
`;

export const Operator = styled(Template.Button)``;

export const AddToShoppingList = styled(Template.Button)`
    padding: 0.35rem;
    border: 1px solid ${Colors.white};

    &:hover {
        border-color: ${Colors.lightpink};
    }

    & svg path {
        fill: ${Colors.white}
    }
`;

export const PDesc = styled(Container)`
    gap: 1.5rem;
    flex-direction: column;
    background: transparent;
`;

export const PWrap = styled(Container)`
    max-width=100%;
    gap: 2.5rem;
    align-items: stretch;
    justify-content: space-between;
    background: transparent;
`;

export const SpinnerBox = styled(Template.Wrap)`
    background: transparent;
    max-width: fit-content;
    gap: 1rem;
    border-bottom: 2px solid ${Colors.lightpink};
    align-items: center;
`;

export const PContent = styled(Container)`
    flex-direction: column; 
    justify-content: space-between;
    gap: 2rem;
    padding: 2rem 1.5rem;
`;

export const PBox = styled.div(props => ({
    display: 'flex',
    flexDirection: props.view ? 'column': 'row',
    width: '100%',
    maxWidth: props.view ? '275px': '100%',
    maxHeight: 'fit-content',
    borderRadius: '20px',
    gap: props.view ? '0': '1.5rem',
    overflow: 'hidden',
    background: Colors.darkred,
    transformOrigin: '50% 50%',
    transition: '0.1s all linear',

    [`img`] : {
        maxWidth: props.view ? '100%' : '275px',
        maxHeight: props.view ? '170px' : '100%',
        width:'100%',
        height: '100%',
        objectFit: props.view ? 'cover' : 'contain',
    },

    [`:hover`] : {
        transform: 'scale(1.05)',
        boxShadow: '0px 14px 20px ' + Colors.darkred,
    }
}));