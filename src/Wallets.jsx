import { useEffect } from 'react';

function Wallets() {
    const wallets = [
        {
            name: 'BTC',
            wallet: 'bc1qxvmrwf7x0vlyq3xrqhg3cljtjvstzgy2xph429',
            network: 'Bitcoin',
        },
        {
            name: 'ETH',
            wallet: '0x35cC3233946Cb544fc81a483A33479cff689225d',
            network: 'Ethereum',
        },
        {
            name: 'BNB',
            wallet: '0x35cC3233946Cb544fc81a483A33479cff689225d',
            network: 'BNB Smart Chain',
        },
        {
            name: 'SOL',
            wallet: 'GkhZFsMwm4qjt5Mjy3xctaWCZWJXZKXWqVLRTYx59fj4',
            network: 'Solana',
        },
        {
            name: 'ADA',
            wallet: 'addr1qydmkwl0d0dzryg6x34fh89ytcwkr5qtq0z4y4pl2dv6j4rrpawdg4uvqmyggfc9euywe9090357wrmgxay2u9cuzgvsmu42qr',
            network: 'Cardano',
        },
        {
            name: 'USDT',
            wallet: [
                '0x35cC3233946Cb544fc81a483A33479cff689225d',
                'TCyzssJQUMa8LDnLYwfUFPufzM4V3ff8MF',
            ],
            network: ['Polygon', 'Tron'],
        },
        {
            name: 'DOGE',
            wallet: 'DTZQcxdZSNpSKKHeqyYSDAzgaUFKkg3RqY',
            network: 'DOGE',
        },
        {
            name: 'PEPE',
            wallet: '0x35cC3233946Cb544fc81a483A33479cff689225d',
            network: 'Ethereum',
        },
        {
            name: 'SHIB',
            wallet: '0x35cC3233946Cb544fc81a483A33479cff689225d',
            network: 'Ethereum',
        },
    ];

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className="absolute top-0 z-[51] flex h-full w-full items-center justify-center bg-slate-400/25 backdrop-blur-sm">
            <p>Name: Bitcoin</p>
            <img
                src="./walletsImages/BitcoinWallet.jpg"
                alt="bitcoin-code"
                className=""
            />
            <p>please do well to send the coins using the Bitcoin network</p>
        </div>
    );
}

export default Wallets;
