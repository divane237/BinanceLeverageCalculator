// https://www.binance.com/en/support/announcement/binance-futures-will-update-the-leverage-margin-tiers-and-capped-funding-rate-of-multiple-usd%E2%93%A2-m-perpetual-contracts-2023-11-06-9c88b57603534ad68444e209ea9d9c28

function FuturesTradingInstruction() {
    const INSTRUCTIONS = [
        {
            description:
                'If you are betting for prices to rise, choose "Long", and if you are betting against the market choose "Short"',
        },
        {
            description:
                'Enter the cost or margin. Imagine you have 10,000 USDT in your USDS-M Futures wallet and you wish to use only part, let say 6,000. This is the amount you will input on the "cost/margin" fill',
        },
        {
            description: 'Set your entry price',
        },
        {
            description: 'Set your exit price',
        },
        {
            description:
                'Select your leverage. between 1 and 50. Remember cryptocurrency market is very volatile',
        },
        {
            description: `Select your margin mode Isolated or Cross. Selecting "Cross" means your available balance will be used to keep your position open. Meaning of the 6,000 you used, you can now input an amount in the "Wallet Balance" field provided to adjust your liquidation price. The remaining 4,000 could be lost totally if the is no STOP-LOSS mechanism placed. On the other hand, selecting "Isolated", means only your 6,000 will be lost in the event of a liquidation`,
        },
        {
            description: `Select a maintenance margin rate, which vary depending on the pair you trade and your position size. You can check this out using this `,
            link: 'https://www.binance.com/en/support/announcement/binance-futures-will-update-the-leverage-margin-tiers-and-capped-funding-rate-of-multiple-usd%E2%93%A2-m-perpetual-contracts-2023-11-06-9c88b57603534ad68444e209ea9d9c28',
        },
    ];

    return (
        <div className="lg:col-start-2 lg:row-start-2">
            <h1 className="text-center text-xl font-bold">
                How to use this Binance calculator
            </h1>
            <ul className="mt-3 px-2 py-2">
                {INSTRUCTIONS.map((instruction, n) => (
                    <li className="my-3" key={n}>
                        <span className="font-semibold">Step {n + 1}:</span>{' '}
                        {instruction.description}{' '}
                        {instruction.link && (
                            <a
                                href={instruction.link}
                                className="text-blue-500 hover:text-blue-300"
                                target="blank"
                            >
                                link.
                            </a>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FuturesTradingInstruction;

function externalBinanceLink() {
    return (
        <a
            href=" https://www.binance.com/en/support/announcement/binance-futures-will-update-the-leverage-margin-tiers-and-capped-funding-rate-of-multiple-usd%E2%93%A2-m-perpetual-contracts-2023-11-06-9c88b57603534ad68444e209ea9d9c28"
            target="blank"
        >
            here
        </a>
    );
}
