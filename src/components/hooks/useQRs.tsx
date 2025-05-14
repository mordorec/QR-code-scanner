import {useMemo} from 'react'
import { Item } from '../../entities'

const useSortedQRs = (data: Item[], sort: string): Item[] => {
    const sortedQRs = useMemo(() => {
        let sortedData = [...data];

        if (sort) {
            if (sort === 'title') {
                return sortedData.sort((a, b) => a.title.localeCompare(b.title));
            } else if (sort === 'date') {
                return sortedData.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
            }
        }
        return data
    }, [sort, data])

    return sortedQRs
}

export const useQRs = (data: Item[], sort: string, query: string): Item[] => {
    const sortedQRs = useSortedQRs(data, sort)
    const sortedAndSearchedQRs = useMemo(() => {
        return sortedQRs.filter(qr => {
            const title = qr.title || '';
            return title.toLowerCase().includes(query.toLowerCase());
        });
    }, [query, sortedQRs])

    return sortedAndSearchedQRs
}