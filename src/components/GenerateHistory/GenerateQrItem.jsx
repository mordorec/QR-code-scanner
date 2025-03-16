import { QRCodeSVG } from 'qrcode.react';
import s from './GenerateQrItem.module.css';

export const GenerateQrItem = ({ qr, onRemove, onOpen }) => {
    return (
        <div className={s.item} onClick={() => onOpen(qr)}>
            <button className={s.closeButton} onClick={(e) => onRemove(qr.id, e)}>
                <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            </button>
            <p className={s.text}>{qr.title}</p>
            <p className={s.date}>Дата создания: {new Date(qr.date).toLocaleString()}</p>
            <QRCodeSVG value={qr.title} size={200} />
        </div>
    );
}