import { QRCodeSVG } from 'qrcode.react';
import React from 'react'
import { QrItemProps } from '../../entities'
import { css } from '@linaria/core';

const item = css`
    max-width: 430px;
    height: 350px;
    position: relative;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 30px 0px rgba(7, 7, 7, 0.3);
    align-items: center;
    justify-content: center;
    padding: 0 0 50px 0;
`;

const closeButton = css`
    position: absolute;
    background: none;
    border: none;
    padding: 0;
    color: white;
    cursor: pointer;
    top: 0;
    right: 0;
`;

const text = css`
    font-size: 32px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    overflow-wrap: break-word;
    word-break: break-all;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 0px;
`;

export const GenerateQrItem = ({ qr, onRemove, onOpen }: QrItemProps) => {
    return (
        <div className={item} onClick={() => onOpen(qr)}>
            <button className={closeButton} onClick={(e) => onRemove(qr.id, e)}>
                <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            </button>
            <p className={text} title={qr.title}>{qr.title}</p>
            <p>Дата создания: {new Date(qr.date).toLocaleString()}</p>
            <QRCodeSVG value={qr.title} size={200} />
        </div>
    );
}