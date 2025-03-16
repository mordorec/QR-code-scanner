import { useEffect, useState } from 'react';
import { GENERATE_DATA } from '../../constants';
import { QRCodeSVG } from 'qrcode.react';
import s from './GenerateHistory.module.css';
import QrFilter from '../QrFilter/QrFilter';
import MyModal from '../UI/modal/MyModal';
import { GenerateQrList } from './GenerateQrList';
import { useQRs } from '../hooks/useQRs';

export const GenerateHistory = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState({ sort: '', query: '' });
    const [modal, setModal] = useState(false);
    const [selectedQR, setSelectedQR] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 9;

    const sortedAndSearchedQRs = useQRs(data, filter.sort, filter.query);

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem(GENERATE_DATA));
        setData(savedData);
    }, []);

    useEffect(() => {
        if (modal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [modal]);

    const removeQR = (id, e) => {
        e.stopPropagation();
        const updatedData = data.filter((qr) => qr.id !== id);
        setData(updatedData);
        localStorage.setItem(GENERATE_DATA, JSON.stringify(updatedData));
    };

    const openModal = (qr) => {
        setSelectedQR(qr);
        setModal(true);
    };

    const pageCount = Math.ceil(sortedAndSearchedQRs.length / ITEMS_PER_PAGE);
    const paginatedQRs = sortedAndSearchedQRs.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, pageCount));
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    return (
        <>  
            <QrFilter filter={filter} setFilter={setFilter} />
            <div className={s.container}>
                <GenerateQrList sortedAndSearchedQRs={paginatedQRs} onRemove={removeQR} onOpen={openModal} />
            </div>
            {selectedQR && (
                <MyModal visible={modal} setVisible={setModal}>
                    <QRCodeSVG value={selectedQR.title} size={400} />
                </MyModal>
            )}
            <div className={s.pagination}>
                <button onClick={handlePrevPage} disabled={currentPage === 1}>Назад</button>
                <span>Страница {currentPage} из {pageCount}</span>
                <button onClick={handleNextPage} disabled={currentPage === pageCount}>Вперед</button>
            </div>
        </>
    );
};