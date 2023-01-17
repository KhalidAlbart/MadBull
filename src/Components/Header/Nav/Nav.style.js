import styled from 'styled-components';
import {Colors} from '../../constants';

export const StyledList = styled.ol`
    display: flex;
    flex-direction: ${props => props.direction === 'column' ? 'column' : 'row'};
    flex-wrap: nowrap;
    list-style: none;
    justify-content: center;
    align-content: center;
    gap: 2.5rem;
    order: ${props => props.order || 0};

    li {
        color: ${Colors.white};
        font-size: 1.8rem;
        letter-spacing: 10%;
        font-style: normal;
        font-weight: 400;
        text-transform: uppercase;
        transition: 0.2s all linear;
    }

    a {
        text-decoration: none;
        cursor: pointer;
        color: inherit;
    }

    li:hover {
        color: ${Colors.lightpink};
    }
`;