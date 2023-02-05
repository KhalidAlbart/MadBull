import React from 'react'
import { useDispatch } from 'react-redux'
import { sortAction } from '../../../Actions/Sort'
import * as Sort from './SortField.style'

export default function SortCase(props) {
    const dispatch = useDispatch()

    const arrow = {
        upwards: '\u2191',
        downwards: '\u2193'
    }
    
    const handleChange = (event) => {
        dispatch(sortAction(event.target.value))
    }

    return (
        <Sort.Wrap maxWidth='200px'>
            <Sort.Select onChange={handleChange} defaultValue='COST-UP'>
                <option value='COST-UP'>{arrow.upwards} Цена</option>
                <option value='COST-DOWN'>{arrow.downwards} Цена</option>
                <option value='NAME-UP'>{arrow.upwards} Алфавит</option>
                <option value='NAME-DOWN'>{arrow.downwards} Алфавит</option>
            </Sort.Select>
        </Sort.Wrap>
    ); 
}