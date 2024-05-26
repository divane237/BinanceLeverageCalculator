import { createContext, useState } from 'react';
import BLCalculator from './BLCalculator';
import BinanceReferal from './BinanceReferal';
import NavBar from './NavBar';
import { ThemeContext } from './context/Contexts';

function App() {
    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={theme}>
            {/* <AuthContext.Provider value={user}> */}
            <div
                className={
                    theme === 'light'
                        ? 'bg-[#EEEEEE] text-black'
                        : 'bg-[#393E46] text-white '
                }
            >
                <NavBar setTheme={setTheme} />
                <BLCalculator />
                <BinanceReferal />
            </div>
            {/* </AuthContext.Provider> */}
        </ThemeContext.Provider>
    );
}

export default App;
