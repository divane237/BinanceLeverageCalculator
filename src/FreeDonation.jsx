import { useContext, useState } from 'react';

import { WalletContext } from './context/Contexts';

function FreeDonation({ className, setSelectedWallet }) {
    const wallets = useContext(WalletContext);

    return (
        <div className={className}>
            <p className="mb-2 text-center">Want to offer $10 for coffee ?</p>

            <div className="mb-3 flex justify-around">
                {wallets.map((wallet, i) => (
                    <button
                        className="m-1"
                        onClick={() => setSelectedWallet(wallet.name)}
                        key={wallet.name}
                    >
                        {wallet.icon}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default FreeDonation;
