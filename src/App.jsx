import { useEffect, useState } from 'react';
import BLCalculator from './BLCalculator';
import BinanceReferal from './BinanceReferal';
import NavBar from './NavBar';

import FuturesTradingInstruction from './FuturesTradingInstruction';

import FreeDonation from './FreeDonation';

import SelectedWallets from './SelectedWallets';

import CryptoArticle from './CryptoArticle';
import { MyProviders } from './context/MyProviders';

function App() {
    const [theme, setTheme] = useState('light');
    const [selectedWallet, setSelectedWallet] = useState(null);

    useEffect(() => {
        document.body.style.backgroundColor =
            theme === 'light' ? '#EEE' : '#393E46';
    }, [theme]);

    return (
        <MyProviders theme={theme} setTheme={setTheme}>
            <div
                className={` ${
                    theme === 'light'
                        ? 'bg-[#EEE] text-black'
                        : 'bg-[#393E46] text-white'
                }`}
            >
                <FreeDonation setSelectedWallet={setSelectedWallet} />
                {selectedWallet && (
                    <SelectedWallets
                        selectedWallet={selectedWallet}
                        setSelectedWallet={setSelectedWallet}
                    />
                )}
                <NavBar />

                <main className={`main lg:grid lg:grid-cols-2`}>
                    <BLCalculator />
                    <BinanceReferal />
                    <FuturesTradingInstruction />
                    <CryptoArticle />
                </main>
            </div>
        </MyProviders>
    );
}

export default App;
