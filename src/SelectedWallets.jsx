import { useContext, useEffect, useState } from 'react';
import { ThemeContext, WalletContext } from './context/Contexts';

function SelectedWallets({ selectedWallet, setSelectedWallet }) {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        // The copy wallet address code

        const copyClipboard = async () => {
            // navigator.permissions
            //     .query({ name: 'write-on-clipboard' })
            //     .then((result) => {
            //         if (result.state == 'granted' || result.state == 'prompt') {
            //             alert('Write access granted!');
            //         }
            //     });

            // console.log('The copy clipboard function is executed');
            try {
                await navigator.clipboard.writeText(displayWallet[0].wallet);
            } catch (err) {
                console.error('Failed to copy: ', err);
            }
        };

        // Once copy icon is clicked, wallet is copied to the clipboard

        // console.log(copied);
        (copied || !copied) && copyClipboard();

        // Disable the scroll bar when menu is open

        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [copied]);

    const wallets = useContext(WalletContext);

    const displayWallet = wallets.filter(
        (wallet) => wallet.name === selectedWallet,
    );

    const theme = useContext(ThemeContext);

    // Function to notify that wallet address has been copied

    function notifyCopyOnce() {
        if (copied) return;

        notifyCopyOnce = function () {};
        setCopied(!copied);
    }

    // Function to close wallet

    function closeWallet(e) {
        if (e.target.id === 'copy0' || e.target.id === 'copy1') {
            notifyCopyOnce();
            return;
        }

        if (e.target.id === 'copy2') return;

        // setCopied(false);
        setSelectedWallet(!selectedWallet);
    }

    return (
        <div
            className="absolute top-0 z-[51] flex h-full w-full flex-col items-center  justify-center bg-slate-400/20 backdrop-blur-lg"
            onClick={closeWallet}
        >
            <div className="relative my-3 w-full select-none font-poppins text-xl font-semibold">
                <p className="text-center">
                    {displayWallet.map((wallet) => wallet.name)}
                </p>
            </div>

            {/* QR Code */}

            {/* <img
                src={displayWallet[0].qrCode}
                alt="bitcoin-code"
                className="my-8 select-none rounded-xl max-sm:w-1/2 lg:rounded-3xl"
            /> */}

            {/* QR Code */}
            <div
                style={{
                    background: `url(${displayWallet[0].qrCode})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundOrigin: 'padding-box',
                    backgroundPosition: 'center',
                }}
                className="h-[300px] w-1/2 select-none"
            ></div>

            {/* Wallet address  */}
            <div className="relative my-4 flex flex-col items-center text-sm lg:text-base">
                <p
                    className={`copy ${theme === 'light' ? 'bg-white' : 'bg-black'} m-1 rounded-full border-2 px-3 py-2 font-mono`}
                    id="copy2"
                >
                    {displayWallet[0].wallet}{' '}
                </p>
                <button
                    className="copy my-2 hover:text-sky-300 lg:absolute lg:-right-2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-full"
                    id="copy1"
                >
                    <svg
                        width="45"
                        height="45"
                        viewBox="0 0 15 15"
                        fill="none"
                        id="copy0"
                    >
                        <path
                            d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                    {copied && (
                        <span className="text-center text-xs font-bold tracking-wider text-green-600">
                            copied!
                        </span>
                    )}
                </button>
            </div>
            <p className="font-semilbold select-none text-sm italic tracking-wide text-sky-500">
                Please send using the {displayWallet[0].network} network
            </p>
        </div>
    );
}

export default SelectedWallets;
