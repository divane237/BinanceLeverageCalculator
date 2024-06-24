import { useTranslation } from 'react-i18next';

function FuturesTradingInstruction() {
    const { t } = useTranslation();

    const INSTRUCTIONS = [
        {
            description: t('futuresTradingInstruction.instruction1'),
        },
        {
            description: t('futuresTradingInstruction.instruction2'),
        },
        {
            description: t('futuresTradingInstruction.instruction3'),
        },
        {
            description: t('futuresTradingInstruction.instruction4'),
        },
        {
            description: t('futuresTradingInstruction.instruction5'),
        },
        {
            description: t('futuresTradingInstruction.instruction6'),
        },
        {
            description: t('futuresTradingInstruction.instruction7'),
            link: 'https://www.binance.com/en/support/announcement/binance-futures-will-update-the-leverage-margin-tiers-and-capped-funding-rate-of-multiple-usd%E2%93%A2-m-perpetual-contracts-2023-11-06-9c88b57603534ad68444e209ea9d9c28',
        },
        {
            description: t('futuresTradingInstruction.instruction8'),
        },
    ];

    return (
        <div className="lg:col-start-2 lg:row-start-1 lg:my-4">
            <h1 className="text-center text-xl font-bold">
                {t('futuresTradingInstruction.title')}
            </h1>
            <ul className="mt-3 px-2 py-2">
                {INSTRUCTIONS.map((instruction, n) => (
                    <li className="my-3" key={n}>
                        <span className="font-semibold">
                            {' '}
                            {t('futuresTradingInstruction.step')} {n + 1}:
                        </span>{' '}
                        {instruction.description}{' '}
                        {instruction.link && (
                            <a
                                href={instruction.link}
                                className="ml-1 text-blue-500 hover:text-blue-300"
                                target="blank"
                            >
                                {/* link. */}
                                {t('futuresTradingInstruction.externalLink')}.
                            </a>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FuturesTradingInstruction;
