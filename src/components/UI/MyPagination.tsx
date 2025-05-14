import React, { useState, useEffect } from 'react';
import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { MyPaginationProps } from '../../entities';

const paginationContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

const Button = styled.button`
    margin: 0 10px;
    padding: 5px 10px;
    cursor: pointer;
`;

const Span = styled.span`
    font-size: 16px;
`;

function MyPagination<T>({ items, itemsPerPage, renderItems }: MyPaginationProps<T>) {
    const [currentPage, setCurrentPage] = useState(1);
    
    const pageCount = Math.ceil(items.length / itemsPerPage);
    
    const paginatedItems = items.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    
    useEffect(() => {
        if (currentPage > pageCount && currentPage > 1 && pageCount > 0) {
            setCurrentPage(pageCount);
        }
    }, [items, pageCount, currentPage]);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, pageCount));
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    return (
        <>
            {renderItems(paginatedItems)}
            <div className={paginationContainer}>
                <Button onClick={handlePrevPage} disabled={currentPage === 1}>Назад</Button>
                <Span>Страница {currentPage} из {pageCount || 1}</Span>
                <Button onClick={handleNextPage} disabled={currentPage === pageCount || pageCount === 0}>Вперед</Button>
            </div>
        </>
    );
}

export default MyPagination;
