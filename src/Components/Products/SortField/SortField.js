import React from 'react'
import { useDispatch } from 'react-redux'
import { sortAction } from '../../../Actions/Sort'
import * as Sort from './SortField.style'

export default function SortCase(props) {
    const dispatch = useDispatch()

    const handleChange = (event) => {
        dispatch(sortAction(event.target.value))
    }

    return (
        <Sort.Wrap maxWidth='200px'>
            <Sort.Select onChange={handleChange} defaultValue='COST-UP'>
                <option value='COST-UP'>↑ Цена</option>
                <option value='COST-DOWN'>↓ Цена</option>
                <option value='NAME-UP'>↑ Алфавит</option>
                <option value='NAME-DOWN'>↓ Алфавит</option>
            </Sort.Select>
        </Sort.Wrap>
    ); 
}