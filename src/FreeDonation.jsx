import { useState } from 'react';
import XRP from './XRP';
import ETH from './ETH';
import USDT from './USDT';
import BNB from './BNB';
import BTC from './BTC';
import SOL from './SOL';
import PEPE from './PEPE';
import DOGE from './DOGE';
import ADA from './ADA';
import SHIB from './SHIB';

function FreeDonation({ className }) {
    const wallets = [
        {
            name: 'ETH',
            wallet: '0x35cC3233946Cb544fc81a483A33479cff689225d',
            network: 'Ethereum',
            icon: <ETH />,
        },
        {
            name: 'BNB',
            wallet: '0x35cC3233946Cb544fc81a483A33479cff689225d',
            network: 'BNB Smart Chain',
            icon: <BNB />,
        },
        {
            name: 'SOL',
            wallet: 'GkhZFsMwm4qjt5Mjy3xctaWCZWJXZKXWqVLRTYx59fj4',
            network: 'Solana',
            icon: <SOL />,
        },
        {
            name: 'ADA',
            wallet: 'addr1qydmkwl0d0dzryg6x34fh89ytcwkr5qtq0z4y4pl2dv6j4rrpawdg4uvqmyggfc9euywe9090357wrmgxay2u9cuzgvsmu42qr',
            network: 'Cardano',
            icon: <ADA />,
        },
        {
            name: 'BTC',
            wallet: 'bc1qxvmrwf7x0vlyq3xrqhg3cljtjvstzgy2xph429',
            network: 'Bitcoin',
            icon: <BTC />,
        },
        {
            name: 'USDT',
            wallet: [
                '0x35cC3233946Cb544fc81a483A33479cff689225d',
                'TCyzssJQUMa8LDnLYwfUFPufzM4V3ff8MF',
            ],
            network: ['Polygon', 'Tron'],
            icon: <USDT />,
        },
        {
            name: 'DOGE',
            wallet: 'DTZQcxdZSNpSKKHeqyYSDAzgaUFKkg3RqY',
            network: 'DOGE',
            icon: <DOGE />,
        },
        {
            name: 'PEPE',
            wallet: '0x35cC3233946Cb544fc81a483A33479cff689225d',
            network: 'Ethereum',
            icon: <PEPE />,
        },
        {
            name: 'SHIB',
            wallet: '0x35cC3233946Cb544fc81a483A33479cff689225d',
            network: 'Ethereum',
            icon: <SHIB />,
        },
    ];

    const [selectedCoin, setSelectedCoin] = useState(null);

    return (
        <div className={className}>
            <p className="mb-2 text-center">Want to offer $10 for coffee ?</p>

            <div className="mb-3 flex justify-around">
                {wallets.map((wallet, i) => (
                    <button
                        className="m-1"
                        onClick={() => setSelectedCoin(wallet.name)}
                    >
                        {wallet.icon}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default FreeDonation;
