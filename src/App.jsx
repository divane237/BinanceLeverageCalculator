import { createContext, useEffect, useState } from 'react';
import BLCalculator from './BLCalculator';
import BinanceReferal from './BinanceReferal';
import NavBar from './NavBar';
import { ThemeContext } from './context/Contexts';
import FuturesTradingInstruction from './FuturesTradingInstruction';
import NavMenu from './NavMenu';
import FreeDonation from './FreeDonation';
import Wallets from './Wallets';

function App() {
    const [theme, setTheme] = useState('');
    useEffect(() => {
        document.body.style.backgroundColor =
            theme === 'light' ? '#EEE' : '#393E46';
    }, [theme]);

    return (
        <ThemeContext.Provider value={theme}>
            <FreeDonation
                className={`${theme === 'light' ? 'text-black' : 'text-white'}`}
            />
            {false && <Wallets />}
            <div
                className={`lg:grid lg:grid-cols-2
                    ${
                        theme === 'light'
                            ? 'bg-[#EEE] text-black'
                            : 'bg-[#393E46] text-white '
                    }
                `}
            >
                <NavBar setTheme={setTheme} />

                <BLCalculator />
                <BinanceReferal />
                <FuturesTradingInstruction />
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
