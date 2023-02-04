import React from "react"
import { HiSearch } from "react-icons/hi"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { searchAction } from "../../../../Actions/Search"
import * as Search from './SearchField.style'

export default function SearchField(props) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = (event) => {
        event.preventDefault()
        navigate("/products")
        dispatch(searchAction(event.target[0].value))
    }

    return (
        <Search.Wrap maxWidth='300px' method="POST" action="../" onSubmit={handleClick}>
            <Search.Input type='search' placeholder='Поиск'/>
            <Search.Button size={Search.Font.size.large} name='searchButton'><HiSearch /></Search.Button>
        </Search.Wrap>
    )
}