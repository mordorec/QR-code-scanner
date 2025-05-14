import { SCAN_DATA } from '../../constants'
import { QRCodeSVG } from 'qrcode.react'
import React, { useState, useEffect } from 'react'
import { css } from '@linaria/core';
import { useQRs } from '../hooks/useQRs';
import { Item } from '../../entities'
import MyModal from '../UI/MyModal';
import QrFilter from '../QrFilter';
import { ScanQrList } from './ScanQrList';
import MyPagination from '../UI/MyPagination';

const container = css`
    padding: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 35px;
`;

export const ScanHistory = () => {
    const [data, setData] = useState<Item[]>([]);
    const [filter, setFilter] = useState({ sort: '', query: '' });
    const [modal, setModal] = useState(false);
    const [selectedQR, setSelectedQR] = useState<Item | null>(null);
    const ITEMS_PER_PAGE = 4;

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
        setData(savedData);
    }, []);

    const sortedAndSearchedQRs = useQRs(data, filter.sort, filter.query);

    const removeQR = (id: number, e: React.MouseEvent) => {
        e.stopPropagation();
        const updatedData = data.filter((qr) => qr.id !== id);
        setData(updatedData);
        localStorage.setItem(SCAN_DATA, JSON.stringify(updatedData));
    };

    const openModal = (qr: Item) => {
        setSelectedQR(qr);
        setModal(true);
    };

    return (
        <>
            <QrFilter filter={filter} setFilter={setFilter} />
            <MyPagination 
                items={sortedAndSearchedQRs}
                itemsPerPage={ITEMS_PER_PAGE}
                renderItems={(paginatedItems) => (
                    <div className={container}>
                        <ScanQrList 
                            sortedAndSearchedQRs={paginatedItems} 
                            onRemove={removeQR} 
                            onOpen={openModal} 
                        />
                    </div>
                )}
            />
            {selectedQR && (
                <MyModal visible={modal} setVisible={setModal}>
                    <QRCodeSVG value={selectedQR.title} size={400} />
                </MyModal>
            )}
        </>
    )
}