import { GenerateQrItem } from './GenerateQrItem';

export const GenerateQrList = ({ sortedAndSearchedQRs, onRemove, onOpen }) => {
    return (
        <>
            {sortedAndSearchedQRs.length ? (
                sortedAndSearchedQRs.map((qr) => (
                    <GenerateQrItem key={qr.id} qr={qr} onRemove={onRemove} onOpen={onOpen} />
                ))
            ) : (
                <h1>QR-коды не найдены!</h1>
            )}
        </>
    );
};