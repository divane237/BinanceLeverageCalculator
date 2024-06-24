import { createContext, useContext, useRef, useState } from 'react';

import ETH from '../CurrencyLogos/ETH';

import BNB from '../CurrencyLogos/BNB';

import SOL from '../CurrencyLogos/SOL';

import BTC from '../CurrencyLogos/BTC';

import USDT from '../CurrencyLogos/USDT';

import DOGE from '../CurrencyLogos/DOGE';

import PEPE from '../CurrencyLogos/PEPE';

import SHIB from '../CurrencyLogos/SHIB';

import TON from '../CurrencyLogos/TON';

const ThemeContext = createContext();

const FixPropsContext = createContext();

function MyProviders({ children, theme, setTheme }) {
    const wallets = [
        {
            name: 'ETH',
            wallet: '0x35cC3233946Cb544fc81a483A33479cff689225d',
            network: 'Ethereum',
            icon: <ETH />,
            qrCode: '/walletsImages/EthereumWallet.jpg',
        },
        {
            name: 'BNB',
            wallet: '0x35cC3233946Cb544fc81a483A33479cff689225d',
            network: 'BNB Smart Chain',
            icon: <BNB />,
            qrCode: '/walletsImages/BNBWallet.jpg',
        },
        {
            name: 'SOL',
            wallet: 'GkhZFsMwm4qjt5Mjy3xctaWCZWJXZKXWqVLRTYx59fj4',
            network: 'Solana',
            icon: <SOL />,
            qrCode: '/walletsImages/SolanaWallet.jpg',
        },
        {
            name: 'TON',
            wallet: 'EQAdehNN-JJcXrTPyDI0iUUKp3gCcLObGLS2olJNKXCyULqP',
            network: 'Toncoin',
            icon: <TON />,
            qrCode: '/walletsImages/TonWallet.jpg',
        },
        {
            name: 'BTC',
            wallet: 'bc1qxvmrwf7x0vlyq3xrqhg3cljtjvstzgy2xph429',
            network: 'Bitcoin',
            icon: <BTC />,
            qrCode: '/walletsImages/BitcoinWallet.jpg',
        },
        {
            name: 'USDT',
            wallet: 'TCyzssJQUMa8LDnLYwfUFPufzM4V3ff8MF',
            network: 'Tron',
            icon: <USDT />,
            qrCode: '/walletsImages/USDT-Tron.jpg',
        },
        {
            name: 'DOGE',
            wallet: 'DTZQcxdZSNpSKKHeqyYSDAzgaUFKkg3RqY',
            network: 'DOGE',
            icon: <DOGE />,
            qrCode: '/walletsImages/DOGEWallet.jpg',
        },
        {
            name: 'PEPE',
            wallet: '0x35cC3233946Cb544fc81a483A33479cff689225d',
            network: 'Ethereum',
            icon: <PEPE />,
            qrCode: '/walletsImages/PEPEWallet.jpg',
        },
        {
            name: 'SHIB',
            wallet: '0x35cC3233946Cb544fc81a483A33479cff689225d',
            network: 'Ethereum',
            icon: <SHIB />,
            qrCode: '/walletsImages/EthereumWallet.jpg',
        },
    ];

    const articleRef = useRef();
    const calculatorRef = useRef();

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <FixPropsContext.Provider
                value={{ wallets, articleRef, calculatorRef }}
            >
                {children}
            </FixPropsContext.Provider>
        </ThemeContext.Provider>
    );
}

function useTheme() {
    const { theme, setTheme } = useContext(ThemeContext);

    if (theme === undefined)
        throw new Error('ThemeContext was used outside of the ThemeProvider');

    return { theme, setTheme };
}

function useFixProps() {
    const { articleRef, calculatorRef, wallets } = useContext(FixPropsContext);

    if (
        articleRef === undefined ||
        calculatorRef === undefined ||
        wallets === undefined
    )
        throw new Error(
            'FixPropsContext was used outside of the FixPropsProvider',
        );

    return { wallets, articleRef, calculatorRef };
}

export { MyProviders, useTheme, useFixProps };
