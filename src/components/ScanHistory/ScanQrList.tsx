import React from 'react';
import { ScanQrItem } from './ScanQrItem';
import { QrListProps } from '../../entities';

export const ScanQrList = ({ sortedAndSearchedQRs, onRemove, onOpen }: QrListProps) => {
    return (
        <>
            {sortedAndSearchedQRs.length ? (
                sortedAndSearchedQRs.map((qr) => (
                    <ScanQrItem key={qr.id} qr={qr} onRemove={onRemove} onOpen={onOpen} />
                ))
            ) : (
                <h1>QR-коды не найдены!</h1>
            )}
        </>
    );
};