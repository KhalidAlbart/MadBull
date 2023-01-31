import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Sort from './SortField.style';

export default function SortCase(props) {
    const sortCase = useSelector(state => state.sort)
    const dispatch = useDispatch()

    const arrow = {
        upwards: '\u2191',
        downwards: '\u2193'
    }
    
    const userChange = (event) => {
        setSortCase(event.target.value);
    }

    return (
        <Sort.Wrap maxWidth='200px'>
            <Sort.Select onChange={userChange} value={sortCase}>
                <option value='COST-UP'>{arrow.upwards} Цена</option>
                <option value='COST-DOWN'>{arrow.downwards} Цена</option>
                <option value='NAME-UP'>{arrow.upwards} Алфавит</option>
                <option value='NAME-DOWN'>{arrow.downwards} Алфавит</option>
            </Sort.Select>
        </Sort.Wrap>
    );
}