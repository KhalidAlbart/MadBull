import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";
import * as Search from './SearchField.style';

export default function SearchField(props) {
    const [value, setValue] = useState('');
    
    const userChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <Search.Wrap maxWidth='300px'>
            <Search.Input onChange={userChange} value={value} type='search' placeholder='Поиск'/>
            <Search.Button size={Search.Font.size.large} name='searchButton'><HiSearch /></Search.Button>
        </Search.Wrap>
    );
}