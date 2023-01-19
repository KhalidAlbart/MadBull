import styled from 'styled-components';
import { Colors } from '../constants.js';

export const Container = styled.div(props => ({
    top: 0,
    position: 'relative',
    padding: props.padding || 0,
    margin: props.margin || 0,
    maxWidth: props.maxWidth || 'auto',
    width: '100%',
    height: props.height || 'auto',
    display: 'flex',
    flexDirection: props.column ? 'column' : 'row',
    flexWrap: props.Wrap ? 'wrap' : 'nowrap',
    justifyContent: props.justifyContent || 'flex-start',
    alignItems: props.alignItems || 'flex-start',
    gap: props.gap ? props.gap : 0,
    background: props.background || Colors.darkred,
}));