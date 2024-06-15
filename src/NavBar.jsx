import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from './context/Contexts';
import NavMenu from './NavMenu';

function NavBar({ setTheme }) {
    const theme = useContext(ThemeContext);
    const [menu, setMenu] = useState(false);

    useEffect(() => {
        menu
            ? (document.body.style.overflow = 'hidden')
            : (document.body.style.overflow = 'unset');
    }, [menu]);

    function changeTheme() {
        setTheme((value) => (value = theme === 'light' ? 'dark' : 'light'));
    }

    return (
        <div className="sticky -top-1 z-50">
            <div className="relative flex items-center justify-stretch gap-x-3 shadow-lg backdrop-blur-xl">
                <a className="flex items-center px-2 py-3 hover:cursor-pointer">
                    <span>
                        <svg
                            width="30"
                            height="30"
                            viewBox="0 0 74 109"
                            fill="none"
                        >
                            <rect
                                width="74"
                                height="109"
                                rx="20"
                                fill="#B6BFD7"
                            />
                            <rect
                                x="12"
                                y="18"
                                width="50"
                                height="12"
                                fill="white"
                            />
                            <circle cx="18" cy="47" r="6" fill="white" />
                            <circle cx="56" cy="67" r="6" fill="white" />
                            <circle cx="56" cy="90" r="6" fill="white" />
                            <circle cx="37" cy="67" r="6" fill="white" />
                            <circle cx="18" cy="67" r="6" fill="white" />
                            <circle cx="56" cy="47" r="6" fill="white" />
                            <circle cx="37" cy="47" r="6" fill="white" />
                            <line
                                x1="18"
                                y1="90"
                                x2="37"
                                y2="90"
                                stroke="white"
                                strokeWidth="12"
                                strokeLinecap="round"
                            />
                            <path
                                d="M46.72 23.136C47.0347 23.1947 47.2933 23.352 47.496 23.608C47.6987 23.864 47.8 24.1573 47.8 24.488C47.8 24.7867 47.7253 25.0507 47.576 25.28C47.432 25.504 47.2213 25.68 46.944 25.808C46.6667 25.936 46.3387 26 45.96 26H43.552V20.416H45.856C46.2347 20.416 46.56 20.4773 46.832 20.6C47.1093 20.7227 47.3173 20.8933 47.456 21.112C47.6 21.3307 47.672 21.5787 47.672 21.856C47.672 22.1813 47.584 22.4533 47.408 22.672C47.2373 22.8907 47.008 23.0453 46.72 23.136ZM44.672 22.72H45.696C45.9627 22.72 46.168 22.6613 46.312 22.544C46.456 22.4213 46.528 22.248 46.528 22.024C46.528 21.8 46.456 21.6267 46.312 21.504C46.168 21.3813 45.9627 21.32 45.696 21.32H44.672V22.72ZM45.8 25.088C46.072 25.088 46.2827 25.024 46.432 24.896C46.5867 24.768 46.664 24.5867 46.664 24.352C46.664 24.112 46.584 23.9253 46.424 23.792C46.264 23.6533 46.048 23.584 45.776 23.584H44.672V25.088H45.8ZM49.8126 25.112H51.6526V26H48.6926V20.416H49.8126V25.112ZM52.0925 23.2C52.0925 22.6507 52.2152 22.16 52.4605 21.728C52.7112 21.2907 53.0498 20.952 53.4765 20.712C53.9085 20.4667 54.3912 20.344 54.9245 20.344C55.5485 20.344 56.0952 20.504 56.5645 20.824C57.0338 21.144 57.3618 21.5867 57.5485 22.152H56.2605C56.1325 21.8853 55.9512 21.6853 55.7165 21.552C55.4872 21.4187 55.2205 21.352 54.9165 21.352C54.5912 21.352 54.3005 21.4293 54.0445 21.584C53.7938 21.7333 53.5965 21.9467 53.4525 22.224C53.3138 22.5013 53.2445 22.8267 53.2445 23.2C53.2445 23.568 53.3138 23.8933 53.4525 24.176C53.5965 24.4533 53.7938 24.6693 54.0445 24.824C54.3005 24.9733 54.5912 25.048 54.9165 25.048C55.2205 25.048 55.4872 24.9813 55.7165 24.848C55.9512 24.7093 56.1325 24.5067 56.2605 24.24H57.5485C57.3618 24.8107 57.0338 25.256 56.5645 25.576C56.1005 25.8907 55.5538 26.048 54.9245 26.048C54.3912 26.048 53.9085 25.928 53.4765 25.688C53.0498 25.4427 52.7112 25.104 52.4605 24.672C52.2152 24.24 52.0925 23.7493 52.0925 23.2Z"
                                fill="#B6BFD7"
                            />
                        </svg>
                    </span>
                    <p className="text-2xl font-semibold text-blue-300">BLC</p>
                </a>

                {/* Theme Button */}
                <button
                    className="ml-auto flex rounded-full border-2  px-2 py-1 hover:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 active:bg-stone-700"
                    onClick={changeTheme}
                >
                    {theme === 'light' ? (
                        <span className="text-yellow-600">
                            {' '}
                            <svg
                                width="25"
                                height="25"
                                viewBox="0 0 15 15"
                                fill="none"
                            >
                                <path
                                    d="M7.5 0C7.77614 0 8 0.223858 8 0.5V2.5C8 2.77614 7.77614 3 7.5 3C7.22386 3 7 2.77614 7 2.5V0.5C7 0.223858 7.22386 0 7.5 0ZM2.1967 2.1967C2.39196 2.00144 2.70854 2.00144 2.90381 2.1967L4.31802 3.61091C4.51328 3.80617 4.51328 4.12276 4.31802 4.31802C4.12276 4.51328 3.80617 4.51328 3.61091 4.31802L2.1967 2.90381C2.00144 2.70854 2.00144 2.39196 2.1967 2.1967ZM0.5 7C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H2.5C2.77614 8 3 7.77614 3 7.5C3 7.22386 2.77614 7 2.5 7H0.5ZM2.1967 12.8033C2.00144 12.608 2.00144 12.2915 2.1967 12.0962L3.61091 10.682C3.80617 10.4867 4.12276 10.4867 4.31802 10.682C4.51328 10.8772 4.51328 11.1938 4.31802 11.3891L2.90381 12.8033C2.70854 12.9986 2.39196 12.9986 2.1967 12.8033ZM12.5 7C12.2239 7 12 7.22386 12 7.5C12 7.77614 12.2239 8 12.5 8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7H12.5ZM10.682 4.31802C10.4867 4.12276 10.4867 3.80617 10.682 3.61091L12.0962 2.1967C12.2915 2.00144 12.608 2.00144 12.8033 2.1967C12.9986 2.39196 12.9986 2.70854 12.8033 2.90381L11.3891 4.31802C11.1938 4.51328 10.8772 4.51328 10.682 4.31802ZM8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5V14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V12.5ZM10.682 10.682C10.8772 10.4867 11.1938 10.4867 11.3891 10.682L12.8033 12.0962C12.9986 12.2915 12.9986 12.608 12.8033 12.8033C12.608 12.9986 12.2915 12.9986 12.0962 12.8033L10.682 11.3891C10.4867 11.1938 10.4867 10.8772 10.682 10.682ZM5.5 7.5C5.5 6.39543 6.39543 5.5 7.5 5.5C8.60457 5.5 9.5 6.39543 9.5 7.5C9.5 8.60457 8.60457 9.5 7.5 9.5C6.39543 9.5 5.5 8.60457 5.5 7.5ZM7.5 4.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5 7.5 10.5C9.15685 10.5 10.5 9.15685 10.5 7.5C10.5 5.84315 9.15685 4.5 7.5 4.5Z"
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </span>
                    ) : (
                        <span className="text-black-500">
                            <svg
                                width="25"
                                height="25"
                                viewBox="0 0 15 15"
                                fill="none"
                            >
                                <path
                                    d="M2.89998 0.499976C2.89998 0.279062 2.72089 0.0999756 2.49998 0.0999756C2.27906 0.0999756 2.09998 0.279062 2.09998 0.499976V1.09998H1.49998C1.27906 1.09998 1.09998 1.27906 1.09998 1.49998C1.09998 1.72089 1.27906 1.89998 1.49998 1.89998H2.09998V2.49998C2.09998 2.72089 2.27906 2.89998 2.49998 2.89998C2.72089 2.89998 2.89998 2.72089 2.89998 2.49998V1.89998H3.49998C3.72089 1.89998 3.89998 1.72089 3.89998 1.49998C3.89998 1.27906 3.72089 1.09998 3.49998 1.09998H2.89998V0.499976ZM5.89998 3.49998C5.89998 3.27906 5.72089 3.09998 5.49998 3.09998C5.27906 3.09998 5.09998 3.27906 5.09998 3.49998V4.09998H4.49998C4.27906 4.09998 4.09998 4.27906 4.09998 4.49998C4.09998 4.72089 4.27906 4.89998 4.49998 4.89998H5.09998V5.49998C5.09998 5.72089 5.27906 5.89998 5.49998 5.89998C5.72089 5.89998 5.89998 5.72089 5.89998 5.49998V4.89998H6.49998C6.72089 4.89998 6.89998 4.72089 6.89998 4.49998C6.89998 4.27906 6.72089 4.09998 6.49998 4.09998H5.89998V3.49998ZM1.89998 6.49998C1.89998 6.27906 1.72089 6.09998 1.49998 6.09998C1.27906 6.09998 1.09998 6.27906 1.09998 6.49998V7.09998H0.499976C0.279062 7.09998 0.0999756 7.27906 0.0999756 7.49998C0.0999756 7.72089 0.279062 7.89998 0.499976 7.89998H1.09998V8.49998C1.09998 8.72089 1.27906 8.89997 1.49998 8.89997C1.72089 8.89997 1.89998 8.72089 1.89998 8.49998V7.89998H2.49998C2.72089 7.89998 2.89998 7.72089 2.89998 7.49998C2.89998 7.27906 2.72089 7.09998 2.49998 7.09998H1.89998V6.49998ZM8.54406 0.98184L8.24618 0.941586C8.03275 0.917676 7.90692 1.1655 8.02936 1.34194C8.17013 1.54479 8.29981 1.75592 8.41754 1.97445C8.91878 2.90485 9.20322 3.96932 9.20322 5.10022C9.20322 8.37201 6.82247 11.0878 3.69887 11.6097C3.45736 11.65 3.20988 11.6772 2.96008 11.6906C2.74563 11.702 2.62729 11.9535 2.77721 12.1072C2.84551 12.1773 2.91535 12.2458 2.98667 12.3128L3.05883 12.3795L3.31883 12.6045L3.50684 12.7532L3.62796 12.8433L3.81491 12.9742L3.99079 13.089C4.11175 13.1651 4.23536 13.2375 4.36157 13.3059L4.62496 13.4412L4.88553 13.5607L5.18837 13.6828L5.43169 13.7686C5.56564 13.8128 5.70149 13.8529 5.83857 13.8885C5.94262 13.9155 6.04767 13.9401 6.15405 13.9622C6.27993 13.9883 6.40713 14.0109 6.53544 14.0298L6.85241 14.0685L7.11934 14.0892C7.24637 14.0965 7.37436 14.1002 7.50322 14.1002C11.1483 14.1002 14.1032 11.1453 14.1032 7.50023C14.1032 7.25044 14.0893 7.00389 14.0623 6.76131L14.0255 6.48407C13.991 6.26083 13.9453 6.04129 13.8891 5.82642C13.8213 5.56709 13.7382 5.31398 13.6409 5.06881L13.5279 4.80132L13.4507 4.63542L13.3766 4.48666C13.2178 4.17773 13.0353 3.88295 12.8312 3.60423L12.6782 3.40352L12.4793 3.16432L12.3157 2.98361L12.1961 2.85951L12.0355 2.70246L11.8134 2.50184L11.4925 2.24191L11.2483 2.06498L10.9562 1.87446L10.6346 1.68894L10.3073 1.52378L10.1938 1.47176L9.95488 1.3706L9.67791 1.2669L9.42566 1.1846L9.10075 1.09489L8.83599 1.03486L8.54406 0.98184ZM10.4032 5.30023C10.4032 4.27588 10.2002 3.29829 9.83244 2.40604C11.7623 3.28995 13.1032 5.23862 13.1032 7.50023C13.1032 10.593 10.596 13.1002 7.50322 13.1002C6.63646 13.1002 5.81597 12.9036 5.08355 12.5522C6.5419 12.0941 7.81081 11.2082 8.74322 10.0416C8.87963 10.2284 9.10028 10.3497 9.34928 10.3497C9.76349 10.3497 10.0993 10.0139 10.0993 9.59971C10.0993 9.24256 9.84965 8.94373 9.51535 8.86816C9.57741 8.75165 9.63653 8.63334 9.6926 8.51332C9.88358 8.63163 10.1088 8.69993 10.35 8.69993C11.0403 8.69993 11.6 8.14028 11.6 7.44993C11.6 6.75976 11.0406 6.20024 10.3505 6.19993C10.3853 5.90487 10.4032 5.60464 10.4032 5.30023Z"
                                    fill="black"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </span>
                    )}
                </button>

                {/* Menu Button */}
                {menu === true ? (
                    <button
                        className="my-[0.02rem] mr-[0.5rem] px-3.5 py-3 hover:cursor-pointer hover:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300"
                        onClick={() => setMenu(!menu)}
                    >
                        <span>
                            <svg
                                width="30"
                                height="30"
                                viewBox="0 0 15 15"
                                fill="none"
                            >
                                <path
                                    d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
                                    fill="red"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </span>
                    </button>
                ) : (
                    <button
                        className="my-[0.02rem] mr-[0.5rem] px-3.5 py-3 hover:cursor-pointer hover:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300"
                        onClick={() => setMenu(!menu)}
                    >
                        <span>
                            <svg
                                width="30"
                                height="30"
                                viewBox="0 0 15 15"
                                fill="none"
                            >
                                <path
                                    d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </span>
                    </button>
                )}
            </div>

            {/* Menu */}
            <NavMenu menu={menu} setMenu={setMenu} />
        </div>
    );
}

export default NavBar;

/*
cross icon

<svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
*/
