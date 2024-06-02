import { createContext, useState } from 'react';
import BLCalculator from './BLCalculator';
import BinanceReferal from './BinanceReferal';
import NavBar from './NavBar';
import { ThemeContext } from './context/Contexts';
import FuturesTradingInstruction from './FuturesTradingInstruction';

function App() {
    const [theme, setTheme] = useState('');

    return (
        <ThemeContext.Provider value={theme}>
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
