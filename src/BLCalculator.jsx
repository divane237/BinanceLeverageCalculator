import { useState } from 'react';

function BLCalculator() {
    const [margin, setMargin] = useState(0);
    const [entryPrice, setEntryPrice] = useState(0);
    const [exitPrice, setExitPrice] = useState(0);
    const [leverage, setLeverage] = useState(1);
    const [maintenanceAmount, setMaintenanceAmount] = useState(0);
    const [position, setPosition] = useState('');
    const [marginMode, setMarginMode] = useState('');
    const [maintenanceMarginRate, setMaintenanceMarginRate] = useState();
    const [liqPrice, setLiqPrice] = useState();
    const [pl, setPL] = useState();

    /*
    profit losses = margin * leverage * (exitPrice/entryPrice - 1)

    Lets call all the expression in brackets DETERMINANT

    */

    let determinant =
        position === 'long'
            ? exitPrice / entryPrice - 1
            : position === 'short'
              ? entryPrice / exitPrice
              : 0;

    function handleSubmit(e) {
        e.preventDefault();

        setPL((value) => (value = determinant * margin * leverage));
    }

    return (
        <div>
            <h1 className="text-center text-xl font-semibold">
                USDS-M Futures
            </h1>
            <form action="" onSubmit={(e) => handleSubmit(e)}>
                {/* Margin / Cost */}
                <div className="flex flex-col items-center justify-center gap-y-3 py-2 md:flex-row md:gap-x-4">
                    <p className="text-sm font-medium">Margin cost</p>
                    <input
                        type="number"
                        className="rounded-full bg-stone-100 px-8 py-2 font-poppins"
                        required
                        onChange={(e) => setMargin(e.target.value)}
                    />
                </div>

                {/* Entry & Exit Price */}
                <div className="">
                    <div className="flex flex-col items-center justify-center gap-y-3 py-2 md:flex-row md:gap-x-4">
                        {/* Entry price */}
                        <p className="text-sm font-medium">Entry Price</p>
                        <input
                            type="number"
                            className="rounded-full bg-stone-100 px-8 py-2 font-poppins"
                            required
                            onChange={(e) => setEntryPrice(e.target.value)}
                        />
                    </div>

                    {/* Exit price */}
                    <div className="flex flex-col items-center justify-center gap-y-3 py-2 md:flex-row md:gap-x-4">
                        <p className="text-sm font-medium">Exit Price</p>
                        <input
                            type="number"
                            className="rounded-full bg-stone-100 px-8 py-2 font-poppins"
                            required
                            onChange={(e) => setExitPrice(e.target.value)}
                        />
                    </div>
                </div>

                {/* Leverage */}
                <div className="my-5 flex flex-col items-center justify-center py-2">
                    <div className="my-1 flex justify-center gap-5">
                        <p className="font-medium">Leverage:</p>
                        <input
                            type="range"
                            min={1}
                            max={50}
                            onChange={(e) => setLeverage(e.target.value)}
                        />{' '}
                        <span
                            className={
                                leverage > 5 ? 'font-medium text-red-500' : ''
                            }
                        >
                            {leverage}x
                        </span>
                    </div>
                    {leverage > 5 && (
                        <p className="text-xs text-red-500">
                            We do not recommend using high leverage when trading
                            cryptocurrencies
                        </p>
                    )}
                </div>

                {/* Postion */}
                <div className="">
                    <p className="mb-4 text-center text-sm font-medium">
                        Position
                    </p>
                    <div className="flex items-center justify-center gap-x-16">
                        <div
                            className={`flex items-center justify-stretch gap-1 ${position === 'short' ? 'hover:cursor-not-allowed' : ''}`}
                        >
                            <input
                                type="checkbox"
                                onClick={(e) =>
                                    e.target.value === ''
                                        ? setPosition('long')
                                        : setPosition('')
                                }
                                value={position}
                                name="longPosition"
                                className="mr-2 scale-200 accent-[#079307] hover:cursor-pointer disabled:cursor-not-allowed"
                                disabled={position === 'short'}
                            />{' '}
                            <span className="">
                                <svg
                                    width="25"
                                    height="25"
                                    viewBox="0 0 15 15"
                                    fill="none"
                                >
                                    <path
                                        d="M7.5 1C7.66148 1 7.81301 1.07798 7.90687 1.20938L12.9069 8.20938C13.0157 8.36179 13.0303 8.56226 12.9446 8.72879C12.8589 8.89533 12.6873 9 12.5 9H10V11.5C10 11.7761 9.77614 12 9.5 12H5.5C5.22386 12 5 11.7761 5 11.5V9H2.5C2.31271 9 2.14112 8.89533 2.05542 8.72879C1.96972 8.56226 1.98427 8.36179 2.09314 8.20938L7.09314 1.20938C7.18699 1.07798 7.33853 1 7.5 1ZM3.4716 8H5.5C5.77614 8 6 8.22386 6 8.5V11H9V8.5C9 8.22386 9.22386 8 9.5 8H11.5284L7.5 2.36023L3.4716 8Z"
                                        fill={
                                            position === 'long'
                                                ? '#079307'
                                                : position === ''
                                                  ? '#268f1ddf'
                                                  : '#a8eca8'
                                        }
                                    ></path>
                                </svg>
                            </span>
                            <p
                                htmlFor="longPosition"
                                className={`font-semibold ${position === 'long' ? 'text-[#079307]' : position === '' ? 'text-[#308c28df]' : 'text-[#a8eca8]'}`}
                            >
                                Long
                            </p>
                        </div>

                        <div
                            className={`flex items-center gap-1 ${position === 'long' ? 'hover:cursor-not-allowed' : ''}`}
                        >
                            <input
                                type="checkbox"
                                value={position}
                                onChange={(e) =>
                                    e.target.value === ''
                                        ? setPosition('short')
                                        : setPosition('')
                                }
                                name="shortPosition"
                                disabled={position === 'long'}
                                className={`mr-2 scale-200 accent-[#ce1414] hover:cursor-pointer focus:accent-[#e43a3a] disabled:cursor-not-allowed`}
                            />{' '}
                            <span className="">
                                <svg width="25" height="25" viewBox="0 0 15 15">
                                    <path
                                        d="M5 3.5C5 3.22386 5.22386 3 5.5 3H9.5C9.77614 3 10 3.22386 10 3.5V6H12.5C12.6873 6 12.8589 6.10467 12.9446 6.27121C13.0303 6.43774 13.0157 6.63821 12.9069 6.79062L7.90687 13.7906C7.81301 13.922 7.66148 14 7.5 14C7.33853 14 7.18699 13.922 7.09314 13.7906L2.09314 6.79062C1.98427 6.63821 1.96972 6.43774 2.05542 6.27121C2.14112 6.10467 2.31271 6 2.5 6H5V3.5ZM6 4V6.5C6 6.77614 5.77614 7 5.5 7H3.4716L7.5 12.6398L11.5284 7H9.5C9.22386 7 9 6.77614 9 6.5V4H6Z"
                                        fill={`${position === 'short' ? '#ce1414' : position === '' ? '#e73737' : '#c34e4e81'}`}
                                    ></path>
                                </svg>
                            </span>
                            <p
                                htmlFor="shortPosition"
                                className={`font-semibold  ${position === 'short' ? 'text-[#ce1414]' : position === '' ? 'text-[#e73737]' : 'text-red-300'}`}
                            >
                                Short
                            </p>
                        </div>
                    </div>
                </div>

                {/* Margin mode */}
                <div className="my-4 flex-col">
                    <p className="px-1 py-2 text-center text-sm font-medium ">
                        Margin mode
                    </p>

                    <div className="my-2 flex flex-col items-stretch justify-center gap-y-2">
                        <div className="flex justify-center gap-x-2 px-1 py-2">
                            <div
                                className={`flex basis-1/4 gap-1 px-2 py-1 ${marginMode === 'cross' ? 'hover:cursor-not-allowed' : ''} `}
                            >
                                <input
                                    type="checkbox"
                                    name="isolatedMargin"
                                    value={marginMode}
                                    onClick={(e) => {
                                        e.target.value === ''
                                            ? setMarginMode('isolated')
                                            : setMarginMode('');
                                    }}
                                    disabled={marginMode === 'cross'}
                                    className="mr-2 scale-200 hover:cursor-pointer disabled:cursor-not-allowed"
                                />{' '}
                                <p
                                    className={
                                        marginMode === 'cross'
                                            ? 'text-gray-500'
                                            : 'text-black'
                                    }
                                >
                                    Isolated
                                </p>
                            </div>
                            <div
                                className={`flex basis-1/4 gap-1  px-2 py-1  ${marginMode === 'isolated' ? 'hover:cursor-not-allowed' : ''}`}
                            >
                                <input
                                    type="checkbox"
                                    name="crossMargin"
                                    value={marginMode}
                                    onClick={(e) => {
                                        e.target.value === ''
                                            ? setMarginMode('cross')
                                            : setMarginMode('');
                                    }}
                                    disabled={marginMode === 'isolated'}
                                    className="mr-2 scale-200 hover:cursor-pointer disabled:cursor-not-allowed"
                                />{' '}
                                <p
                                    className={
                                        marginMode === 'isolated'
                                            ? 'text-gray-500'
                                            : 'text-black'
                                    }
                                >
                                    Cross
                                </p>
                            </div>
                        </div>

                        {/* M Amount */}

                        {marginMode === 'cross' ? (
                            <div className="flex flex-col items-center justify-center gap-y-3 py-2 md:flex-row md:gap-x-4">
                                <p htmlFor="">Maintenance Amount</p>
                                <input
                                    type="number"
                                    className="rounded-full bg-stone-100 px-8 py-2 font-poppins"
                                    required
                                    onChange={(e) => {
                                        setMaintenanceAmount(e.target.value);
                                    }}
                                />{' '}
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>

                {/* Maintenance Margin Rate */}
                <div className="flex flex-col items-center justify-center gap-y-2 px-1 py-2 sm:flex-row sm:gap-x-4">
                    <p className="text-center text-sm font-medium">
                        Maintenance Margin Rate
                    </p>
                    <select
                        name=""
                        className="rounded-lg bg-stone-400 px-2 py-1.5 font-poppins hover:cursor-pointer"
                        onChange={(e) =>
                            setMaintenanceMarginRate(e.target.value)
                        }
                    >
                        <option value={0.4}>0.4 %</option>
                        <option value={0.5}>0.5 %</option>
                        <option value={1}>1.0 %</option>
                        <option value={2}>2.0 %</option>
                        <option value={2.5}>2.5 %</option>
                        <option value={4}>4.0 %</option>
                        <option value={5}>5.0 %</option>
                        <option value={10}>10.0 %</option>
                    </select>
                </div>

                {/* Submit button */}
                <button className="mx-5 my-3 rounded-full bg-sky-600 p-3 font-lato">
                    Calculate
                </button>
            </form>
            <p className="mx-5 my-2 text-xl">Liquidation Price: </p>
            <p className="mx-5 my-2 text-xl">Profit and Loss (PNL): {pl}</p>
        </div>
    );
}

export default BLCalculator;
