import { useContext, useEffect } from 'react';
import { Language, ThemeContext } from './context/Contexts';
import { useTranslation } from 'react-i18next';
import i18n from './Translation/i18n';

function LanguageSelection({ setMenu, setMounted }) {
    // useEffect(() => {
    //     setDefaultLang(localStorage.getItem('i18nextLng'));
    // }, []);

    const theme = useContext(ThemeContext);
    const [t] = useTranslation();
    const lngs = useContext(Language);
    return (
        <div className="mt-3 flex justify-center font-lato">
            <p className="px-2 py-1.5">{t('language')}</p>

            <select
                name="languages"
                onChange={(e) => {
                    i18n.changeLanguage(e.target.value);
                    setMenu(false);
                    setMounted(false);
                }}
                defaultValue={localStorage.getItem('i18nextLng')}
                className={`${theme === 'light' ? 'bg-[#EEE] text-black' : 'bg-[#393E46] text-white'} rounded-xl border-[1px] border-gray-400 px-2 py-1.5`}
            >
                {Object.keys(lngs).map((lng) => (
                    <option key={lng} value={lng}>
                        {lngs[lng].nativeName}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default LanguageSelection;
