import styled from 'styled-components';
import { Colors } from '../constants.js';

export const Container = styled.div(props => ({
    top: 0,
    position: 'relative',
    maxWidth: props.maxWidth || 'auto',
    width: '100%',
    height: props.height || 'auto',
    display: 'flex',
    padding: props.padding || 0,
    margin: props.margin || 0,
    flexDirection: props.column ? 'column' : 'row',
    justifyContent: props.justifyContent || 'flex-start',
    alignItems: props.alignItems || 'flex-start',
    gap: props.gap ? props.gap : 0,
    background: props.background || Colors.darkred,
}));