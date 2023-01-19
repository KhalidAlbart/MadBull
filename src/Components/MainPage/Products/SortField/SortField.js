import React, { useState } from 'react';
import * as Sort from './SortField.style';

export default function SortCase(props) {
    const [sortCase, setSortCase] = useState('case 1');

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
                <option value='case1'>{arrow.upwards} Case 1</option>
                <option value='case2'>{arrow.downwards} Case 2</option>
                <option value='case3'>{arrow.upwards} Case 3</option>
                <option value='case4'>{arrow.downwards} Case 4</option>
            </Sort.Select>
        </Sort.Wrap>
    );
}