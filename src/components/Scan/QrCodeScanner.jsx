import { Scanner } from '@yudiel/react-qr-scanner'
import { useState } from 'react'
import { SCAN_DATA } from '../../constants'
import s from './qrCodeScanner.module.css'

export const QrCodeScanner = () => {
    const [scanned, setScanned] = useState(null)

 
    const scanHandler = (currentResult) => {
        setScanned(currentResult[0].rawValue)

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')

        localStorage.setItem(
            SCAN_DATA, 
            JSON.stringify([...prevData, currentResult[0].rawValue])
        )
    }

    return (
        <div className={s.container}>
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
            <p className={s.result}>{scanned}</p>
        </div>
    )
}