import React from 'react';
import { MyButtonProps } from '../../entities';
import { styled } from '@linaria/react';

const Button = styled.button`
    border: none;
    background: black;
    color: white;
    font-size: 20px;
    border-radius: 16px;
    padding: 8px 16px;
    cursor: pointer;
`;

const MyButton = ({title, onClick}: MyButtonProps) => {
    return (
        <Button type="button" onClick={onClick}>
            {title}
        </Button>
    );
}

export default MyButton;