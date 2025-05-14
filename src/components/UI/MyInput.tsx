import React from 'react';
import { MyInputProps } from '../../entities'
import { styled } from '@linaria/react';

const Input = styled.input`
    width: 200px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const MyInput = React.forwardRef<HTMLInputElement, MyInputProps>((props, ref) => {
    return (
        <Input ref={ref} {...props}/>
    );
});

MyInput.displayName = 'MyInput';

export default MyInput;