import { Link } from 'react-router-dom'
import React from 'react'
import { css } from '@linaria/core'

const container = css`
    display: flex;
    justify-content: center;
    gap: 28px;
    font-size: 24px;
`;

const link = css`
    text-decoration: none;
    color: black;
    &:hover {
        text-decoration: underline;
    }
`;

export const Navigation = () => {
    return (
        <nav className={container}>
            <Link className={link} to="/generate">Генерировать QR-код</Link>
            <Link className={link} to="/scan">Сканировать QR-код</Link>
            <Link className={link} to="/generateHistory">История генерирования</Link>
            <Link className={link} to="/scanHistory">История сканирования</Link>
        </nav>
    )
}