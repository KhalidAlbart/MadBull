import styled from "styled-components";
import { Colors, Font, MAX_CAPACITY } from '../../../constants';
import { Button as Template, fontMixin } from '../SearchField/SearchField.style';

export { MAX_CAPACITY }

export const Button = styled(Template)({
    fontSize: Font.size.medium + 'rem',
    color: Colors.darkred,
    textTransform: 'uppercase',

    [`:hover`]: {
        color: Colors.lightpink,
    }
});

export const List = styled.ul({
    display: 'flex',
    listStyle: 'none',
    gap: '2rem',
});

export const Item = styled.li({
    cursor: 'pointer',
    color: Colors.darkred,
    transition: '0.2s all linear',

    [`:hover`]: {
        color: Colors.lightpink,
    }
}, fontMixin);