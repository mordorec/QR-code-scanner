import { QRCodeSVG } from 'qrcode.react';
import React from 'react'
import { QrItemProps } from '../../entities'
import { css } from '@linaria/core';

const item = css`
    width: 600px;
    height: 350px;
    position: relative;
    box-shadow: 0px 0px 30px 0px rgba(7, 7, 7, 0.3);
`;

const container = css`
    padding: 35px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 35px;
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
    overflow-wrap: break-word;
    word-break: break-all;
`;

const rightContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ScanQrItem = ({ qr, onRemove, onOpen }: QrItemProps) => {
    return (
        <div className={item} onClick={() => onOpen(qr)}>
            <button className={closeButton} onClick={(e) => onRemove(qr.id, e)}>
                <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            </button>
            <div className={container}>
                <p className={text}>{qr.title}</p>
                <div className={rightContainer}>
                    <p>Дата создания: {new Date(qr.date).toLocaleString()}</p>
                    <QRCodeSVG value={qr.title} size={200} />
                </div>
            </div>
        </div>
    );
}