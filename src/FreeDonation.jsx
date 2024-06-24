import { useTranslation } from 'react-i18next';
import { useFixProps } from './context/MyProviders';

function FreeDonation({ className, setSelectedWallet }) {
    const { t } = useTranslation();

    const { wallets } = useFixProps();

    return (
        <div className={className}>
            <p className="mb-2 text-center font-lato font-semibold">
                {t('freeDonationComponent.part1')}
            </p>

            <div className="mb-3 flex justify-around">
                {wallets.map((wallet) => (
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
