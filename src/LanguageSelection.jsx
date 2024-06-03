import { useContext } from 'react';
import { ThemeContext } from './context/Contexts';

function LanguageSelection() {
    const theme = useContext(ThemeContext);
    return (
        <div className="mt-3 flex justify-center font-lato">
            <p className="px-2 py-1.5">Language</p>
            <select
                name="language"
                id=""
                className={`${theme === 'light' ? 'bg-[#EEE] text-black' : 'bg-[#393E46] text-white'} rounded-xl border-[1px] border-gray-400 px-2 py-1.5`}
            >
                <option value="English">EN</option>
                <option value="French">FR</option>
                <option value="German">GE</option>
                <option value="Spanish">SPA</option>
                <option value="Italian">IT</option>
            </select>
        </div>
    );
}

export default LanguageSelection;
