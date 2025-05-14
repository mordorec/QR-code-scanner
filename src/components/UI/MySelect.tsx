import React from 'react'
import { MySelectProps } from '../../entities'
import { styled } from '@linaria/react';

const Select = styled.select`
    width: 180px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const MySelect = ({options, defaultValue, value, onChange}: MySelectProps) => {
    return (
        <Select 
            onChange={event => onChange(event.target.value)}
            value={value}
        >
           <option disabled value="">{defaultValue}</option>
           {options.map(option => 
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
           )}
        </Select>
    );
}

export default MySelect;