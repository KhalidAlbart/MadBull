import { StyledList } from "./Nav.style"
import { Link } from "react-router-dom"

export default function Nav(props) {
    const links = props.links
    const refs = props.refs

    const ListItems = refs.map((item, index) => 
        <li key={"link_" + item.substring(1)}><Link to={`/${item}`}>{links[index]}</Link></li>
    )

    return (
        <StyledList>{ListItems}</StyledList>
    )
}