import React, { useEffect, useState } from 'react';
import { GENERATE_DATA } from '../../constants';
import { QRCodeSVG } from 'qrcode.react';
import QrFilter from '../QrFilter';
import MyModal from '../UI/MyModal';
import { GenerateQrList } from './GenerateQrList';
import { useQRs } from '../hooks/useQRs';
import { Item } from '../../entities'
import { css } from '@linaria/core';
import MyPagination from '../UI/MyPagination';

const container = css`
    padding: 35px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 60px;
`;

export const GenerateHistory = () => {
    const [data, setData] = useState<Item[]>([]);
    const [filter, setFilter] = useState({ sort: '', query: '' });
    const [modal, setModal] = useState(false);
    const [selectedQR, setSelectedQR] = useState<Item | null>(null);
    const ITEMS_PER_PAGE = 9;

    const sortedAndSearchedQRs = useQRs(data, filter.sort, filter.query);

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
        setData(savedData);
    }, []);

    const removeQR = (id: number, e: React.MouseEvent) => {
        e.stopPropagation();
        const updatedData = data.filter((qr) => qr.id !== id);
        setData(updatedData);
        localStorage.setItem(GENERATE_DATA, JSON.stringify(updatedData));
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
                        <GenerateQrList 
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
    );
};