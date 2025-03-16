import { QRCodeSVG } from 'qrcode.react'
import { useState } from 'react';
import { GENERATE_DATA } from '../../constants';
import MyButton from '../UI/button/MyButton';
import s from './qrCodeGenerator.module.css'

export const QrCodeGenerator = () => {
    const [value, setValue] = useState('')
    const [result, setResult] = useState('')

    const onClickHandler = () => {
        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')

        const id = parseInt(localStorage.getItem('generateIdCounter') || '1');

        const newItem = {
            id,
            title: value,
            date: new Date().toISOString()
        }

        localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, newItem]))
        localStorage.setItem('generateIdCounter', id + 1);

        setResult(value)
        setValue('')
    }

    const onChangeHandler = (event) => {
        setValue(event.target.value)
        setResult('')
    }

    const phrases = [
        'Какой красивый QR-код!',
        'Вот это квадрат...',
        'Феноменальный экземпляр :0'
    ]

    const randomPhrases = (phrases) => {
        const randomIndex = Math.floor(Math.random() * phrases.length) 
        return phrases[randomIndex]
    }

    return (
        <div className={s.container}>
            <input
                type="text" 
                value={value} 
                placeholder="Введите текст..."
                onChange={onChangeHandler} 
                className={s.input}
            />
            <MyButton
                title='Сгенерировать QR'
                onClick={onClickHandler}
            />
            
            {result !== '' && (
                <>
                    <div>Сгенерированный QR-код для: {result}</div>
                    <div className={s.qrWrapper}>
                        <QRCodeSVG value={value} size={200}/>
                    </div>
                    <div className={s.phrase}>
                        {randomPhrases(phrases)}
                    </div>
                </>
            )}
        </div>
    )
}