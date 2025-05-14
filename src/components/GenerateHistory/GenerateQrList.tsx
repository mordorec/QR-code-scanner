import React from 'react';
import { GenerateQrItem } from './GenerateQrItem';
import { QrListProps } from '../../entities';

export const GenerateQrList = ({ sortedAndSearchedQRs, onRemove, onOpen }: QrListProps) => {
    return (
        <>
            {sortedAndSearchedQRs.length ? (
                sortedAndSearchedQRs.map((qr) => (
                    <GenerateQrItem key={qr.id} qr={qr} onRemove={onRemove} onOpen={onOpen} />
                ))
            ) : (
                <h1>QR-коды не найдены!</h1>
            )}
        </>
    );
};