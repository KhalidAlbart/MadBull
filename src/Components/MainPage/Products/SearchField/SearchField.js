import React from "react"
import { HiSearch } from "react-icons/hi"
import { useDispatch } from "react-redux"
import { searchAction } from "../../../../Actions/Search"
import * as Search from './SearchField.style'

export default function SearchField(props) {
    const dispatch = useDispatch()

    const handleClick = (event) => {
        event.preventDefault()
        let value = event.target[0].value
        dispatch(searchAction(value))
    }

    return (
        <Search.Wrap maxWidth='300px' onSubmit={handleClick}>
            <Search.Input type='search' placeholder='Поиск'/>
            <Search.Button size={Search.Font.size.large} name='searchButton'><HiSearch /></Search.Button>
        </Search.Wrap>
    )
}