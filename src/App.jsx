import { useEffect, useRef, useState } from 'react';
import BLCalculator from './BLCalculator';
import BinanceReferal from './BinanceReferal';
import NavBar from './NavBar';
import {
    Language,
    ThemeContext,
    WalletContext,
    Scroll,
} from './context/Contexts';
import FuturesTradingInstruction from './FuturesTradingInstruction';

import FreeDonation from './FreeDonation';
import ETH from './Currency Logos/ETH';
import BNB from './Currency Logos/BNB';
import SOL from './Currency Logos/SOL';
import BTC from './Currency Logos/BTC';
import USDT from './Currency Logos/USDT';
import DOGE from './Currency Logos/DOGE';
import PEPE from './Currency Logos/PEPE';
import SHIB from './Currency Logos/SHIB';
import TON from './Currency Logos/TON';
import SelectedWallets from './SelectedWallets';

import CryptoArticle from './CryptoArticle';

const initialWallets = [
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

const lngs = {
    en: { nativeName: 'English' },
    fr: { nativeName: 'Français' },
    de: { nativeName: 'Deutsch' },
    ru: { nativeName: 'Русский' },
    cn: { nativeName: '中文' },
    spa: { nativeName: 'Español' },
    it: { nativeName: 'Italiano' },
};

function App() {
    const [theme, setTheme] = useState('light');
    const [wallets, setWallets] = useState(initialWallets);
    const [selectedWallet, setSelectedWallet] = useState(null);

    const articleRef = useRef();
    const calculatorRef = useRef();

    useEffect(() => {
        document.body.style.backgroundColor =
            theme === 'light' ? '#EEE' : '#393E46';
    }, [theme]);

    return (
        <ThemeContext.Provider value={theme}>
            <WalletContext.Provider value={wallets}>
                <Language.Provider value={lngs}>
                    <Scroll.Provider value={{ articleRef, calculatorRef }}>
                        <div
                            className={` ${
                                theme === 'light'
                                    ? 'bg-[#EEE] text-black'
                                    : 'bg-[#393E46] text-white'
                            }`}
                        >
                            <FreeDonation
                                setSelectedWallet={setSelectedWallet}
                            />
                            {selectedWallet && (
                                <SelectedWallets
                                    selectedWallet={selectedWallet}
                                    setSelectedWallet={setSelectedWallet}
                                />
                            )}
                            <NavBar setTheme={setTheme} />

                            <main className={`main lg:grid lg:grid-cols-2`}>
                                <BLCalculator />
                                <BinanceReferal />
                                <FuturesTradingInstruction />
                                <CryptoArticle />
                            </main>
                        </div>
                    </Scroll.Provider>
                </Language.Provider>
            </WalletContext.Provider>
        </ThemeContext.Provider>
    );
}

export default App;
