import React from 'react';
import { QRCodeSVG } from 'qrcode.react'
import { useState, ChangeEvent } from 'react';
import { GENERATE_DATA } from '../constants';
import MyButton from './UI/MyButton';
import { Item } from '../entities'
import { styled } from '@linaria/react';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
`;

const Input = styled.input`
    margin-top: 30px;
    border-radius: 5px;
    border: .5px solid black;
    color: rgb(15, 15, 15);
    width: 400px;
    height: 50px;
    padding: 8px 16px;
    font-size: 32px;
`;

const QrWrapper = styled.div`
    & svg path:last-child {
        fill: black;
    }
`;

const Phrase = styled.div`
    font-size: 24px;
`;

export const QrCodeGenerator = () => {
    const [value, setValue] = useState('')
    const [result, setResult] = useState('')

    const onClickHandler = () => {
        const prevData: Item[] = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')

        const id = parseInt(localStorage.getItem('generateIdCounter') || '1');

        const newItem: Item = {
            id,
            title: value,
            date: new Date().toISOString()
        }

        localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, newItem]))
        localStorage.setItem('generateIdCounter', String(id + 1));

        setResult(value)
        setValue('')
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
        setResult('')
    }

    const phrases = [
        'Какой красивый QR-код!',
        'Вот это квадрат...',
        'Феноменальный экземпляр :0'
    ]

    const randomPhrases = (phrases: string[]) => {
        const randomIndex = Math.floor(Math.random() * phrases.length) 
        return phrases[randomIndex]
    }

    return (
        <Container>
            <Input
                type="text" 
                value={value} 
                placeholder="Введите текст..."
                onChange={onChangeHandler} 
            />
            <MyButton
                title='Сгенерировать QR'
                onClick={onClickHandler}
            />
            
            {result !== '' && (
                <>
                    <div>Сгенерированный QR-код для: {result}</div>
                    <QrWrapper>
                        <QRCodeSVG value={value} size={200}/>
                    </QrWrapper>
                    <Phrase>
                        {randomPhrases(phrases)}
                    </Phrase>
                </>
            )}
        </Container>
    )
}