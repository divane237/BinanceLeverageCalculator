import { useTranslation } from 'react-i18next';

function BinanceReferal() {
    const { t } = useTranslation();

    return (
        <div className="my-3 p-5 text-center lg:col-span-2 lg:col-start-1">
            <div className="my-2 text-base">
                {t('binanceReferalComponent.part1')}
                <p className="my-2">
                    {t('binanceReferalComponent.part2')}
                    <span className="px-1 font-semibold">206524679</span>
                </p>
            </div>
            <a
                href="https://accounts.binance.com/register?ref=206524679"
                target="blank"
                className="m-1 p-1 font-semibold text-sky-600 hover:text-sky-300"
            >
                {t('binanceReferalComponent.part3')}
            </a>
        </div>
    );
}

export default BinanceReferal;
