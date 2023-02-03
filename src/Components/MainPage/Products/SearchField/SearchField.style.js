import styled, { css } from 'styled-components';
import { Font, Colors, Limits } from '../../../constants';

export { Font };

export const fontMixin = `
    border: none;
    outline: none;
    font-family: inherit;
    color: ${Colors.black};
    letter-spacing: 0.1rem;
    background: transparent;
    text-transform: uppercase;
    font-size: ${Font.size.medium}rem;
    font-weight: ${Font.weight.regular};
    font-feature-settings: 'pnum' on, 'lnum' on;
`;

export const Wrap = styled.form(props => ({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    maxWidth: props.maxWidth,
    width: props.maxWidth,
    padding: '0 1rem',
    alignItems: 'center',
    background: 'transparent',
    border: 'none',
    borderBottom: '2px solid ' + Colors.darkred,
    overflow: 'hidden',
}));

export const Input = styled.input({
    width: '100%',
}, css`${fontMixin}`);

export const Button = styled.button(props => ({
    background: 'none',
    border: 'none',
    borderRadius: '1rem',
    minWidth: props.size + 'rem',
    width: props.size + 'rem',
    height: props.size + 'rem',
    transition: Limits.transitonDuration + 's all linear',

    [`svg`]: {
        width: '100%',
        height: '100%',
    },

    [`svg path`]: {
        transition: Limits.transitonDuration + 's all linear',
        fill: props.fill || Colors.darkred,
    },

    [`:hover`]: {
        borderColor: props.border ? Colors.lightpink : 'none',
    },

    [`:hover svg path`]: {
        fill: Colors.lightpink,
    },
}));