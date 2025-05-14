import { QrCodeGenerator } from './components/QrCodeGenerator';
import { QrCodeScanner } from './components/QrCodeScanner';
import { GenerateHistory } from './components/GenerateHistory/GenerateHistory';
import { ScanHistory } from './components/ScanHistory/ScanHistory';
import { Navigation } from './components/Navigation';
import { Routes, Route } from 'react-router-dom'; 
import React from 'react'

const Layout = () => {
    return (
        <div>
            <Navigation />
            <Routes>
                <Route path="/generate" element={<QrCodeGenerator />} />
                <Route path="/scan" element={<QrCodeScanner />} />
                <Route path="/generateHistory" element={<GenerateHistory />} />
                <Route path="/scanHistory" element={<ScanHistory />} />
            </Routes>
        </div>
    )
}

export { Layout }