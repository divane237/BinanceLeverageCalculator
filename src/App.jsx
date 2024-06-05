import { useEffect, useState } from 'react';
import BLCalculator from './BLCalculator';
import BinanceReferal from './BinanceReferal';
import NavBar from './NavBar';
import { ThemeContext, WalletContext } from './context/Contexts';
import FuturesTradingInstruction from './FuturesTradingInstruction';

import FreeDonation from './FreeDonation';
import ETH from './ETH';
import BNB from './BNB';
import SOL from './SOL';
import ADA from './ADA';
import BTC from './BTC';
import USDT from './USDT';
import DOGE from './DOGE';
import PEPE from './PEPE';
import SHIB from './SHIB';
import SelectedWallets from './SelectedWallets';

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
        name: 'ADA',
        wallet: 'bc1qxvmrwf7x0vlyq3xrqhg3cljtjvstzgy2xph429',
        network: 'Cardano',
        icon: <ADA />,
        qrCode: '/walletsImages/CardanoWallet.jpg',
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

        // wallet: [
        //     '0x35cC3233946Cb544fc81a483A33479cff689225d',
        //     'TCyzssJQUMa8LDnLYwfUFPufzM4V3ff8MF',
        // ],
        network: 'Tron',
        // network: ['Polygon', 'Tron'],
        icon: <USDT />,
        qrCode: '/walletsImages/USDT-Tron.jpg',

        // qrCode: [
        //     '/walletsImages/USDT-Polygon.jpg',
        //     '/walletsImages/USDT-Tron.jpg',
        // ],
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
    },
];

function App() {
    const [theme, setTheme] = useState('');
    const [wallets, setWallets] = useState(initialWallets);
    const [selectedWallet, setSelectedWallet] = useState(null);

    useEffect(() => {
        document.body.style.backgroundColor =
            theme === 'light' ? '#EEE' : '#393E46';
    }, [theme]);

    return (
        <ThemeContext.Provider value={theme}>
            <WalletContext.Provider value={wallets}>
                <div
                    className={` ${
                        theme === 'light'
                            ? 'bg-[#EEE] text-black'
                            : 'bg-[#393E46] text-white '
                    }`}
                >
                    <FreeDonation
                        // className={`${theme === 'light' ? 'text-black' : 'text-white'}`}
                        setSelectedWallet={setSelectedWallet}
                    />
                    {selectedWallet && (
                        <SelectedWallets selectedWallet={selectedWallet} />
                    )}
                    <div className={`lg:grid lg:grid-cols-2`}>
                        <NavBar setTheme={setTheme} />

                        <BLCalculator />
                        <BinanceReferal />
                        <FuturesTradingInstruction />
                    </div>
                </div>
            </WalletContext.Provider>
        </ThemeContext.Provider>
    );
}

export default App;
