import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    // here we will place our translations...
                    binanceReferalComponent: {
                        part1: "Don't have a Binance account ? Create and verify your account using the referal ID below",
                        part2: 'Binance referal ID',
                        part3: 'Click Here !!!',
                    },
                    freeDonationComponent: {
                        part1: 'Want to offer $10 for coffee ?',
                    },
                    futuresTradingInstruction: {
                        part1: 'How to use this Binance calculator',
                    },
                    blCalculatorComponent: {
                        part1: '',
                    },
                    navMenuComponenent: {
                        part1: '',
                    },
                    selectedWalletComponent: {
                        part1: '',
                    },
                },
            },
            fr: {
                translation: {
                    // here we will place our translations...
                    binanceReferalComponent: {
                        part1: "Vous n'avez pas de compte Binance ? Créez et vérifiez votre compte en utilisant le code de parrainage ci-dessous",
                        part2: 'Code de parrainage Binance',
                        part3: 'Cliquez ici !!!',
                    },
                    freeDonationComponent: {
                        part1: 'Vous voulez offrir 10 $ pour un café ?',
                    },
                    futuresTradingInstruction: {
                        part1: 'Comment utiliser cette calculatrice Binance',
                    },
                    blCalculatorComponent: {
                        part1: '',
                    },
                    navMenuComponenent: {
                        part1: '',
                    },
                    selectedWalletComponent: {
                        part1: '',
                    },
                },
            },

            de: {
                translation: {
                    // here we will place our translations...
                    binanceReferalComponent: {
                        part1: 'Sie haben kein Binance-Konto? Erstellen und verifizieren Sie Ihr Konto mit dem unten stehenden Empfehlungscode',
                        part2: 'Binance Empfehlungscode',
                        part3: 'Hier klicken !!!',
                    },
                    freeDonationComponent: {
                        part1: 'Möchtest du $10 für einen Kaffee ausgeben?',
                    },
                    futuresTradingInstruction: {
                        part1: 'Wie benutzt man diesen Binance-Rechner',
                    },
                    blCalculatorComponent: {
                        part1: '',
                    },
                    navMenuComponenent: {
                        part1: '',
                    },
                    selectedWalletComponent: {
                        part1: '',
                    },
                },
            },

            ru: {
                translation: {
                    // here we will place our translations...
                    binanceReferalComponent: {
                        part1: 'У вас нет аккаунта на Binance? Создайте и подтвердите свой аккаунт, используя указанный ниже реферальный код',
                        part2: 'Реферальный код Binance',
                        part3: 'Нажмите здесь',
                    },
                    freeDonationComponent: {
                        part1: 'Хотите предложить $10 за кофе?',
                    },
                    futuresTradingInstruction: {
                        part1: 'Как использовать этот калькулятор Binance',
                    },
                    blCalculatorComponent: {
                        part1: '',
                    },
                    navMenuComponenent: {
                        part1: '',
                    },
                    selectedWalletComponent: {
                        part1: '',
                    },
                },
            },

            cn: {
                translation: {
                    // here we will place our translations...
                    binanceReferalComponent: {
                        part1: '没有币安账号？使用下面的推荐代码创建并验证您的账号。',
                        part2: '币安推荐代码',
                        part3: '点击这里',
                    },
                    freeDonationComponent: {
                        part1: '想要用10美元买咖啡吗 ?',
                    },
                    futuresTradingInstruction: {
                        part1: '如何使用这个币安计算器',
                    },
                    blCalculatorComponent: {
                        part1: '',
                    },
                    navMenuComponenent: {
                        part1: '',
                    },
                    selectedWalletComponent: {
                        part1: '',
                    },
                },
            },

            spa: {
                translation: {
                    // here we will place our translations...
                    binanceReferalComponent: {
                        part1: '¿No tienes una cuenta en Binance? Crea y verifica tu cuenta utilizando el código de referencia que se encuentra a continuación',
                        part2: 'Código de referencia de Binance',
                        part3: '¡Haz clic aquí!',
                    },
                    freeDonationComponent: {
                        part1: '¿Quieres ofrecer $10 por un café?',
                    },
                    futuresTradingInstruction: {
                        part1: 'Cómo usar esta calculadora de Binance',
                    },
                    blCalculatorComponent: {
                        part1: '',
                    },
                    navMenuComponenent: {
                        part1: '',
                    },
                    selectedWalletComponent: {
                        part1: '',
                    },
                },
            },
            it: {
                translation: {
                    // here we will place our translations...
                    binanceReferalComponent: {
                        part1: 'Non hai un account su Binance? Crea e verifica il tuo account utilizzando il codice di riferimento qui sotto',

                        part2: 'Codice di riferimento Binance',
                        part3: 'Clicca qui!!!',
                    },
                    freeDonationComponent: {
                        part1: 'Vuoi offrire $10 per un caffè?',
                    },
                    futuresTradingInstruction: {
                        part1: 'Come utilizzare questa calcolatrice Binance',
                    },
                    blCalculatorComponent: {
                        part1: '',
                    },
                    navMenuComponenent: {
                        part1: '',
                    },
                    selectedWalletComponent: {
                        part1: '',
                    },
                },
            },
        },
    });

export default i18n;
