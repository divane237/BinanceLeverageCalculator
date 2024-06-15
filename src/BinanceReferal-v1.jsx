function BinanceReferal() {
    return (
        <div className="col-span-2 mt-10 p-5 text-center lg:col-start-1">
            <div className="my-2 text-base">
                Don't have a Binance account ? Create and verify your account
                using the referal ID below
                <p className="my-2">
                    Binance referal ID:{' '}
                    <span className="font-semibold">206524679</span>
                </p>
            </div>
            <a
                href="https://accounts.binance.com/register?ref=206524679"
                target="blank"
                className="m-1 p-1 font-semibold text-sky-600 hover:text-sky-300"
            >
                Click Here !!!
            </a>
        </div>
    );
}

export default BinanceReferal;
