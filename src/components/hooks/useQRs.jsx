import {useMemo} from 'react'

export const useSortedQRs = (data, sort) => {
    const sortedQRs = useMemo(() => {
        let sortedData = [...data];

        if (sort) {
            if (sort === 'title') {
                return sortedData.sort((a, b) => a.title.localeCompare(b.title));
            } else if (sort === 'date') {
                return sortedData.sort((a, b) => new Date(a.date) - new Date(b.date));
            }
        }
        return data
    }, [sort, data])

    return sortedQRs
}

export const useQRs = (data, sort, query) => {
    const sortedQRs = useSortedQRs(data, sort)
    const sortedAndSearchedQRs = useMemo(() => {
        return sortedQRs.filter(qr => qr.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedQRs])

    return sortedAndSearchedQRs
}