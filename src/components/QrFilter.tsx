import MySelect from "./UI/MySelect";
import MyInput from "./UI/MyInput";
import React from 'react'
import { QrFilterProps } from '../entities'
import { css } from '@linaria/core';

const container = css`
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`;

const QrFilter = ({filter, setFilter}: QrFilterProps) => {
    return (
        <div className={container}>
            <MyInput
                placeholder='Поиск...'
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
            <MySelect
                defaultValue='Сортировка'
                value={filter.sort}
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'date', name: 'По дате создания'}
                ]}
                onChange={(selectedSort: string) => setFilter({...filter, sort: selectedSort})}
            />
        </div>
    );
}
export default QrFilter;