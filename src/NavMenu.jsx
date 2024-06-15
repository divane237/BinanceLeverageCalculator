import LanguageSelection from './LanguageSelection';

function NavMenu({ menu, setMenu }) {
    const NAV_LINKS = [
        {
            title: 'Binance Futures Calculator',
            completed: true,
            comment: '',
        },
        {
            title: 'Cryptocurrency and Blockchain',
            completed: false,
            comment: '',
        },
        {
            title: 'InvesTrack',
            completed: false,
            comment: '(Not avaivalable currently)',
        },
    ];

    const author = 'Divane';
    return (
        <div
            className={`${menu ? 'relative animate-menu' : 'hidden'} top-0 z-50 h-[100dvh] origin-top font-poppins backdrop-blur-2xl`}
        >
            <ul className={`border-b-2 border-gray-400`}>
                {NAV_LINKS.map((link, n) => (
                    <li className="w-full" key={n}>
                        <a
                            href="/"
                            className="group top-0 block border-t-2 border-gray-400 py-2 text-center font-semibold hover:text-lg hover:text-sky-400"
                        >
                            {link.title}
                            <span className="hidden text-xs text-red-500 group-hover:block">
                                {link.comment}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>

            <LanguageSelection setMenu={setMenu} />

            <div className="absolute bottom-[26%] left-1/2 mx-2 mt-1 flex -translate-x-1/2 items-stretch justify-center gap-3 py-2">
                <p className="whitespace-nowrap px-4 py-2">
                    Copy right © {new Date().getFullYear()} {author}
                </p>

                {/* Twitter X */}
                <a
                    href="https://www.x.com/div237"
                    target="blank"
                    className="px-4 py-2"
                >
                    <span>
                        <svg width="20px" height="20px" viewBox="0 0 24 24">
                            <path d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z" />
                        </svg>
                    </span>
                </a>

                {/* Github */}
                <a
                    href="https://www.github.com/divane237"
                    target="blank"
                    className="px-4 py-2"
                >
                    <svg width="20" height="20" viewBox="0 0 15 15" fill="none">
                        <path
                            d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                            fill="black"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </a>
            </div>
        </div>
    );
}

export default NavMenu;
