import { useTranslation } from 'react-i18next';
import i18n from './Translation/i18n';
import { useTheme } from './context/MyProviders';

const lngs = {
    en: { nativeName: 'English' },
    fr: { nativeName: 'Français' },
    de: { nativeName: 'Deutsch' },
    ru: { nativeName: 'Русский' },
    cn: { nativeName: '中文' },
    spa: { nativeName: 'Español' },
    it: { nativeName: 'Italiano' },
};

function LanguageSelection({ setMenu, setMounted }) {
    const { theme } = useTheme();
    const [t] = useTranslation();

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
