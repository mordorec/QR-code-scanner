import s from './MyModal.module.css'
import React, { useEffect } from 'react'
import { MyModalProps } from '../../entities'
import { css } from '@linaria/core';

const myModal = css`
    position:fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: none;
    background: rgba(0, 0, 0, 0.5);
`;

const MyModalContent = css`
    padding: 25px;
    background-color: white;
    border-radius: 16px;
    min-width: 400px;
`;

const active = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MyModal = ({children, visible, setVisible}: MyModalProps) => {
    const rootClasses = [myModal]
  
    if (visible) {
        rootClasses.push(active)
    }

    useEffect(() => {
        if (visible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [visible]);

    const closeModal = () => setVisible(false)

    return (
        <div className={rootClasses.join(' ')} onClick={closeModal}>
            <div className={MyModalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}
export default MyModal;