import { Scanner } from '@yudiel/react-qr-scanner'
import { useState } from 'react'
import { SCAN_DATA } from '../constants'
import React from 'react'
import { ScanResult } from '../entities'
import { css } from '@linaria/core'

const container = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`;

const result = css`
    font-size: 36px;
    margin-bottom: 30px;
`;

export const QrCodeScanner = () => {
    const [scanned, setScanned] = useState<string | null>(null)

    const scanHandler = (currentResult: ScanResult[]) => {
        setScanned(currentResult[0].rawValue)

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')
        
        const id = parseInt(localStorage.getItem('scanIdCounter') || '1');
        
        const newItem = {
            id,
            title: currentResult[0].rawValue,
            date: new Date().toISOString()
        }

        localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, newItem]))
        localStorage.setItem('scanIdCounter', String(id + 1));
    }

    return (
        <div className={container}>
            <Scanner  
                onScan={scanHandler}
                components={{
                    audio: false,
                    finder: false,
                }}
                styles={{
                    container: { width: 400, height: 450 }
                }} 
            />
            <p className={result}>{scanned}</p>
        </div>
    )
}