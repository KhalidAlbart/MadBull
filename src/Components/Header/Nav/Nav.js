import { StyledList } from './Nav.style';

export default function Nav(props) {
    const links = props.links;
    const refs = props.refs;

    const ListItems = refs.map((item, index) => 
        <li key={'link_' + item.substring(1)}><a href={item}>{links[index]}</a></li>
    );

    return (
        <StyledList>{ListItems}</StyledList>
    );
}