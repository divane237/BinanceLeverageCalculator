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
                    language: 'Language',
                    binanceReferalComponent: {
                        part1: "Don't have a Binance account ? Create and verify your account using the referal ID below",
                        part2: 'Binance referal ID',
                        part3: 'Click Here !!!',
                    },
                    freeDonationComponent: {
                        part1: 'Want to offer $10 for coffee ?',
                    },
                    futuresTradingInstruction: {
                        externalLink: 'link',
                        title: 'How to use this Binance calculator',
                        step: 'Step',
                        instruction1:
                            'If you are betting for prices to rise, choose "Long", and if you are betting against the market choose "Short"',
                        instruction2:
                            'Enter the cost or margin. Imagine you have 10,000 USDT in your USDS-M Futures wallet and you wish to use only part, let say 6,000. This is the amount you will input on the "cost/margin" fill',
                        instruction3: 'Set your entry price',
                        instruction4: 'Set your exit price',
                        instruction5:
                            'Select your leverage between 1 and 50. Remember cryptocurrency market is very volatile',
                        instruction6: `Select your margin mode "Isolated" or "Cross". Selecting "Cross" means your available balance will be used to keep your position open. Meaning of the 6,000 you used, you can now input an amount in the "Wallet Balance" field provided to adjust your liquidation price. The remaining 4,000 could be lost totally if the is no STOP-LOSS mechanism placed. On the other hand, selecting "Isolated", means only your 6,000 will be lost in the event of a liquidation`,
                        instruction7: `Select a maintenance margin rate, which vary depending on the pair you trade and your position size. You can check this out using this `,
                        instruction8:
                            'Click Calculate to know your liquidation price & your profit or losses',
                    },
                    blCalculatorComponent: {
                        calculate: 'Calculate',
                        liquidation: 'Liquidation Price',
                        profitNLoss: 'Profit and Loss (PnL)',
                        mmr: 'Maintenance Margin Rate',
                        leverage: 'Leverage',
                        leverageComment:
                            'We do not recommend using high leverage when trading cryptocurrencies',
                        entry: 'Entry Price',
                        exit: 'Exit Price',
                        cost: 'Margin/Cost',
                        position: 'Position',
                        long: 'Long',
                        short: 'Short',
                        walletBalance: 'Wallet Balance',
                        marginMode: 'Margin Mode',
                        isolated: 'Isolated',
                        cross: 'Cross',
                    },
                    navMenuComponent: {
                        link1: 'Binance Futures Calculator',
                        link2: 'Cryptocurrency and Blockchain',
                        link3: 'InvesTrack',
                        comment: '(Not avaivalable currently)',
                    },
                    selectedWalletComponent: {
                        part1: 'copied',
                        part2: 'Please send using the ',
                        part3: 'network',
                    },
                },
            },
            fr: {
                translation: {
                    // here we will place our translations...
                    language: 'Langue',
                    binanceReferalComponent: {
                        part1: "Vous n'avez pas de compte Binance ? Créez et vérifiez votre compte en utilisant le code de parrainage ci-dessous",
                        part2: 'Code de parrainage Binance',
                        part3: 'Cliquez ici !!!',
                    },
                    freeDonationComponent: {
                        part1: 'Vous voulez offrir 10 $ pour un café ?',
                    },
                    futuresTradingInstruction: {
                        externalLink: 'lien',
                        title: 'Comment utiliser cette calculatrice Binance',
                        step: 'Étape',
                        instruction1:
                            "Si vous pariez sur une hausse des prix, choisissez 'Long', et si vous pariez contre le marché, choisissez 'Short'.",
                        instruction2:
                            "Entrez le coût ou la marge. Imaginez que vous avez 10 000 USDT dans votre portefeuille Futures USDS-M et que vous souhaitez n'en utiliser qu'une partie, disons 6 000. C'est le montant que vous allez entrer dans le champ 'coût/marge'.",
                        instruction3: "Définissez votre prix d'entrée.",
                        instruction4: 'Définissez votre prix de sortie.',
                        instruction5:
                            "Sélectionnez votre levier entre 1 et 50. N'oubliez pas que le marché des cryptomonnaies est très volatil.",
                        instruction6:
                            "Sélectionnez votre mode de marge 'Isolée' ou 'Croisée'. Sélectionner 'Croisé' signifie que votre solde disponible sera utilisé pour maintenir votre position ouverte. Cela signifie que sur les 6 000 que vous avez utilisés, vous pouvez maintenant entrer un montant dans le champ 'Solde du portefeuille' fourni pour ajuster votre prix de liquidation. Les 4 000 restants pourraient être totalement perdus s'il n'y a pas de mécanisme STOP-LOSS en place. En revanche, sélectionner 'Isolée' signifie que seuls vos 6 000 seront perdus en cas de liquidation.",
                        instruction7:
                            'Sélectionnez un taux de marge de maintenance, qui varie en fonction de la paire que vous tradez et de la taille de votre position. Vous pouvez vérifier cela en utilisant ce',
                        instruction8:
                            'Cliquez sur Calculer pour connaître votre prix de liquidation et vos bénéfices ou pertes.',
                    },
                    blCalculatorComponent: {
                        calculate: 'Calculer',
                        liquidation: 'Prix de Liquidation',
                        profitNLoss: 'Profit et Perte',
                        mmr: 'Taux de marge de maintenance',
                        leverage: 'Levier',
                        leverageComment:
                            "Nous ne recommandons pas l'utilisation d'un effet de levier élevé pour la négociation de crypto-monnaies.",
                        entry: "Prix d'Entré",
                        exit: 'Prix de Sortie',
                        cost: 'Marge/Coût',

                        position: 'Position',
                        long: 'Acheter',
                        short: 'Vendre',
                        walletBalance: 'Solde du portefeuille',
                        marginMode: 'Mode de Mage',
                        isolated: 'Isoléé',
                        cross: 'Croisée',
                    },
                    navMenuComponent: {
                        link1: 'Calculatrice de Futures Binance',
                        link2: 'Cryptomonnaie et Blockchain',
                        link3: 'InvesTrack',
                        comment: '(Actuellement indisponible)',
                    },
                    selectedWalletComponent: {
                        part1: 'copié',
                        part2: 'Veuillez envoyer en utilisant le',
                        part3: 'réseau',
                    },
                },
            },

            de: {
                translation: {
                    // here we will place our translations...
                    language: 'Sprache',
                    binanceReferalComponent: {
                        part1: 'Sie haben kein Binance-Konto? Erstellen und verifizieren Sie Ihr Konto mit dem unten stehenden Empfehlungscode',
                        part2: 'Binance Empfehlungscode',
                        part3: 'Hier klicken !!!',
                    },
                    freeDonationComponent: {
                        part1: 'Möchtest du $10 für einen Kaffee ausgeben?',
                    },
                    futuresTradingInstruction: {
                        externalLink: 'Link',
                        title: 'Wie man diesen Binance-Rechner verwendet',
                        step: 'Schritt',
                        instruction1:
                            "Wenn Sie auf steigende Preise setzen, wählen Sie 'Long'. Wenn Sie gegen den Markt setzen, wählen Sie 'Short'.",
                        instruction2:
                            "Geben Sie die Kosten oder die Marge ein. Stellen Sie sich vor, Sie haben 10.000 USDT in Ihrem USDS-M Futures-Wallet und möchten nur einen Teil davon verwenden, sagen wir 6.000. Diesen Betrag geben Sie im Feld 'Kosten/Marge' ein.",
                        instruction3: 'Legen Sie Ihren Einstiegspreis fest.',
                        instruction4: 'Legen Sie Ihren Ausstiegspreis fest.',
                        instruction5:
                            'Wählen Sie einen Hebel zwischen 1 und 50. Denken Sie daran, dass der Kryptowährungsmarkt sehr volatil ist.',
                        instruction6:
                            "Wählen Sie Ihren Margin-Modus: 'Isoliert' oder 'Kreuz'. Wenn Sie 'Kreuz' wählen, wird Ihr verfügbares Guthaben verwendet, um Ihre Position offen zu halten. Von den 6.000, die Sie eingesetzt haben, können Sie jetzt einen Betrag im Feld 'Wallet-Guthaben' eingeben, um Ihren Liquidationspreis anzupassen. Die restlichen 4.000 könnten komplett verloren gehen, wenn kein STOP-LOSS-Mechanismus vorhanden ist. Wenn Sie jedoch 'Isoliert' wählen, gehen im Falle einer Liquidation nur Ihre 6.000 verloren.",
                        instruction7:
                            'Wählen Sie eine Wartungsmarge, die je nach gehandeltem Paar und Positionsgröße variiert. Sie können dies mit diesem Tool überprüfen ',
                        instruction8:
                            'Klicken Sie auf Berechnen, um Ihren Liquidationspreis und Ihre Gewinne oder Verluste zu erfahren.',
                    },
                    blCalculatorComponent: {
                        calculate: 'Berechnen',
                        liquidation: 'Liquidationspreis',
                        profitNLoss: 'Gewinn und Verlust',
                        mmr: 'Margin-Verhältnis',
                        leverage: 'Hebel',
                        leverageComment:
                            'Wir raten davon ab, beim Handel mit Kryptowährungen eine hohe Hebelwirkung einzusetzen.',
                        entry: 'Eintrittspreis',
                        exit: 'Ausstiegspreis',
                        cost: 'Kosten',
                        position: 'Position',
                        long: 'Long',
                        short: 'Short',
                        walletBalance: 'Wallet-Guthaben',
                        marginMode: 'Margin-Modus',
                        isolated: 'Isolated',
                        cross: 'Cross',
                    },
                    navMenuComponent: {
                        link1: 'Binance Futures Rechner',
                        link2: 'Kryptowährung und Blockchain',
                        link3: 'InvesTrack',
                        comment: '(Derzeit nicht verfügbar)',
                    },
                    selectedWalletComponent: {
                        part1: 'kopiert',
                        part2: 'Bitte senden Sie über das ',
                        part3: 'Netzwerk',
                    },
                },
            },

            ru: {
                translation: {
                    // here we will place our translations...
                    language: 'Язык',
                    binanceReferalComponent: {
                        part1: 'У вас нет аккаунта на Binance? Создайте и подтвердите свой аккаунт, используя указанный ниже реферальный код',
                        part2: 'Реферальный код Binance',
                        part3: 'Нажмите здесь',
                    },
                    freeDonationComponent: {
                        part1: 'Хотите предложить $10 за кофе?',
                    },
                    futuresTradingInstruction: {
                        externalLink: 'ссылку',
                        title: 'Как использовать этот калькулятор Binance',
                        step: 'Шаг',
                        instruction1:
                            "Если вы ожидаете роста цен, выберите 'Long'. Если вы ставите против рынка, выберите 'Short'.",
                        instruction2:
                            "Введите стоимость или маржу. Представьте, что у вас есть 10 000 USDT в вашем кошельке USDS-M Futures, и вы хотите использовать только часть, например, 6 000. Это сумма, которую вы введете в поле 'стоимость/маржа'.",
                        instruction3: 'Установите цену входа.',
                        instruction4: 'Установите цену выхода.',
                        instruction5:
                            'Выберите кредитное плечо от 1 до 50. Помните, что рынок криптовалют очень волатилен.',
                        instruction6:
                            "Выберите режим маржи: 'Изолированный' или 'Кросс'. Выбор 'Кросс' означает, что ваш доступный баланс будет использован для поддержания вашей позиции открытой. Из 6 000, которые вы использовали, вы можете ввести сумму в поле 'Баланс кошелька', чтобы настроить цену ликвидации. Оставшиеся 4 000 могут быть полностью потеряны, если не установлен механизм STOP-LOSS. В случае выбора 'Изолированный' в случае ликвидации потеряете только ваши 6 000.",
                        instruction7:
                            'Выберите уровень поддерживающей маржи, который варьируется в зависимости от торговой пары и размера вашей позиции. Вы можете проверить это с помощью этого инструмента.',
                        instruction8:
                            'Нажмите на кнопку «Рассчитать», чтобы узнать цену ликвидации и вашу прибыль или убытки.',
                    },
                    blCalculatorComponent: {
                        calculate: 'Рассчитать',
                        liquidation: 'Цена ликвидации',
                        profitNLoss: 'Прибыль и убыток',
                        mmr: 'Процент обслуживаемой маржи',
                        leverage: 'Плечо',
                        leverageComment:
                            'Мы не рекомендуем использовать высокое плечо при торговле криптовалютами',
                        entry: 'Цена входа',
                        exit: 'Цена выхода',
                        cost: 'Стоимость',
                        position: 'Позиция',
                        long: 'Лонг/Long',
                        short: 'Шорт/Short',
                        walletBalance: 'Баланс кошелька',
                        marginMode: 'Режим маржи',
                        isolated: 'Изолированный',
                        cross: 'Кросс',
                    },
                    navMenuComponent: {
                        link1: 'Калькулятор фьючерсов Binance',
                        link2: 'Криптовалюта и блокчейн',
                        link3: 'InvesTrack',
                        comment: '(В настоящее время недоступно)',
                    },
                    selectedWalletComponent: {
                        part1: 'скопировано',
                        part2: 'Пожалуйста, отправьте, используя ',
                        part3: 'сеть',
                    },
                },
            },

            cn: {
                translation: {
                    // here we will place our translations...
                    language: '语言',
                    binanceReferalComponent: {
                        part1: '没有币安账号？使用下面的推荐代码创建并验证您的账号。',
                        part2: '币安推荐代码',
                        part3: '点击这里',
                    },
                    freeDonationComponent: {
                        part1: '想要用10美元买咖啡吗 ?',
                    },
                    futuresTradingInstruction: {
                        externalLink: '点击‘链接’',
                        title: '如何使用这个币安计算器',
                        step: '步骤',
                        instruction1:
                            '如果您预测价格上涨，请选择“多头”；如果您预测价格下跌，请选择“空头”。',
                        instruction2:
                            '输入成本或保证金。例如，如果您在USDS-M期货钱包中有10,000 USDT，并且只希望使用其中的一部分，比如6,000。这是您在“成本/保证金”字段中输入的金额。',
                        instruction3: '设置您的入场价格。',
                        instruction4: '设置您的出场价格。',
                        instruction5:
                            '选择1到50之间的杠杆。请记住，加密货币市场波动性很大。',
                        instruction6:
                            '选择您的保证金模式：“单独”或“交叉”。选择“交叉”意味着您的可用余额将用于保持您的头寸。这意味着您使用的6,000中，现在可以在“钱包余额”字段中输入一个金额，以调整您的清算价格。如果没有设置止损机制，剩余的4,000可能会完全丧失。而选择“单独”意味着在清算的情况下，只有您的6,000会丧失。',
                        instruction7:
                            '选择一个维持保证金率，这取决于您交易的货币对和头寸大小。您可以使用这个工具进行检查。',
                        instruction8:
                            '点击计算来了解你的清算价格和你的利润或损失。',
                    },
                    blCalculatorComponent: {
                        calculate: '计算',
                        liquidation: '清算价格',
                        profitNLoss: '盈亏',
                        mmr: '维持保证金率',
                        leverage: '杠杆',
                        leverageComment: '我们不建议在交易加密货币时使用高杠杆',
                        entry: '入场价格',
                        exit: '出场价格',
                        cost: '成本',
                        position: '持仓',
                        long: '做多/Long',
                        short: '做空/Short',
                        walletBalance: '钱包余额',
                        marginMode: '保证金模式',
                        isolated: '独立',
                        cross: '全仓',
                    },
                    navMenuComponent: {
                        link1: '币安期货计算器',
                        link2: '加密货币与区块链',
                        link3: 'InvesTrack',
                        comment: '(目前不可用)',
                    },
                    selectedWalletComponent: {
                        part1: '已复制',
                        part2: '请使用',
                        part3: '网络发送',
                    },
                },
            },

            spa: {
                translation: {
                    // here we will place our translations...
                    language: 'Idioma',
                    binanceReferalComponent: {
                        part1: '¿No tienes una cuenta en Binance? Crea y verifica tu cuenta utilizando el código de referencia que se encuentra a continuación',
                        part2: 'Código de referencia de Binance',
                        part3: '¡Haz clic aquí!',
                    },
                    freeDonationComponent: {
                        part1: '¿Quieres ofrecer $10 por un café?',
                    },
                    futuresTradingInstruction: {
                        externalLink: 'enlace',
                        title: 'Cómo usar esta calculadora de Binance',
                        step: 'Paso',
                        instruction1:
                            "Si apuestas a que los precios subirán, elige 'Long'. Si apuestas contra el mercado, elige 'Short'.",
                        instruction2:
                            "Ingrese el costo o margen. Por ejemplo, si tienes 10,000 USDT en tu billetera de futuros USDS-M y deseas usar solo una parte, digamos 6,000, esta es la cantidad que ingresarás en el campo 'costo/margen'.",
                        instruction3: 'Establece tu precio de entrada.',
                        instruction4: 'Establece tu precio de salida.',
                        instruction5:
                            'Elige tu apalancamiento entre 1 y 50. Recuerda que el mercado de criptomonedas es muy volátil.',
                        instruction6:
                            "Selecciona tu modo de margen: 'Aislado' o 'Cruzado'. Elegir 'Cruzado' significa que tu saldo disponible se utilizará para mantener tu posición abierta. De los 6,000 que usaste, puedes ahora ingresar un monto en el campo 'Saldo de la billetera' para ajustar tu precio de liquidación. Los 4,000 restantes podrían perderse totalmente si no hay un mecanismo de STOP-LOSS. En cambio, seleccionar 'Aislado' significa que solo tus 6,000 se perderán en caso de una liquidación.",
                        instruction7:
                            'Selecciona una tasa de margen de mantenimiento, que varía según el par que negocies y el tamaño de tu posición. Puedes verificar esto con esta herramienta.',
                        instruction8:
                            'Haz clic en Calcular para conocer tu precio de liquidación y tus ganancias o pérdidas.',
                    },
                    blCalculatorComponent: {
                        calculate: 'Calcular',
                        liquidation: 'Precio de liquidación',
                        profitNLoss: 'Ganancia y Pérdida ',
                        mmr: 'Proporción de Margen',
                        leverage: 'Apalancamiento',
                        leverageComment:
                            'No recomendamos utilizar un apalancamiento elevado para operar con criptomonedas.',
                        entry: 'Precio de Entrada',
                        exit: 'Precio de Salida',
                        cost: 'Costo',
                        position: 'Posición',
                        long: 'Comprar',
                        short: 'Vender',
                        walletBalance: 'Saldo del monedero',
                        marginMode: 'Margin Mode',
                        isolated: 'Aislado',
                        cross: 'Cruzado',
                    },
                    navMenuComponent: {
                        link1: 'Calculadora de Futuros de Binance',
                        link2: 'Criptomoneda y Blockchain',
                        link3: 'InvesTrack',
                        comment: '(Actualmente no disponible)',
                    },
                    selectedWalletComponent: {
                        part1: 'copiado',
                        part2: 'Por favor, envíe utilizando la',
                        part3: 'red',
                    },
                },
            },
            it: {
                translation: {
                    // here we will place our translations...
                    language: 'Lingua',
                    binanceReferalComponent: {
                        part1: 'Non hai un account su Binance? Crea e verifica il tuo account utilizzando il codice di riferimento qui sotto',

                        part2: 'Codice di riferimento Binance',
                        part3: 'Clicca qui!!!',
                    },
                    freeDonationComponent: {
                        part1: 'Vuoi offrire $10 per un caffè?',
                    },
                    futuresTradingInstruction: {
                        externalLink: 'link',
                        title: 'Come usare questo calcolatore di Binance',
                        step: 'Passo',
                        instruction1:
                            "Se prevedi un aumento dei prezzi, scegli 'Long'. Se prevedi una diminuzione, scegli 'Short'.",
                        instruction2:
                            "Inserisci il costo o il margine. Ad esempio, se hai 10.000 USDT nel tuo portafoglio Futures USDS-M e vuoi usarne solo una parte, diciamo 6.000, questa è la somma che inserirai nel campo 'costo/margine'.",
                        instruction3: 'Imposta il tuo prezzo di entrata.',
                        instruction4: 'Imposta il tuo prezzo di uscita.',
                        instruction5:
                            'Select your leverage between 1 and 50. Remember cryptocurrency market is very volatile',
                        instruction6: `Select your margin mode "Isolated" or "Cross". Selecting "Cross" means your available balance will be used to keep your position open. Meaning of the 6,000 you used, you can now input an amount in the "Wallet Balance" field provided to adjust your liquidation price. The remaining 4,000 could be lost totally if the is no STOP-LOSS mechanism placed. On the other hand, selecting "Isolated", means only your 6,000 will be lost in the event of a liquidation`,
                        instruction7: `Select a maintenance margin rate, which vary depending on the pair you trade and your position size. You can check this out using this `,
                        instruction8:
                            'Clicca su Calcola per conoscere il tuo prezzo di liquidazione e i tuoi profitti o perdite.',
                    },
                    blCalculatorComponent: {
                        calculate: 'Calcola',
                        liquidation: 'Prezzo di liquidazione',
                        profitNLoss: 'Profitto e Perdita',
                        mmr: 'Rapporto del margine',
                        leverage: 'Leva',
                        leverageComment:
                            'Non consigliamo di utilizzare una leva finanziaria elevata per il trading di criptovalute.',
                        entry: "Prezzo d'ingresso",
                        exit: 'Prezzo di uscita',
                        cost: 'Margin/Cost',
                        position: 'Posizione',
                        long: 'Acquista',
                        short: 'Vendi',
                        walletBalance: 'Saldo del portafoglio',
                        marginMode: 'Modalità margine',
                        isolated: 'Isolato',
                        cross: 'Incrociato',
                    },
                    navMenuComponent: {
                        link1: 'Calcolatrice Futures Binance',
                        link2: 'Criptovaluta e Blockchain',
                        link3: 'InvesTrack',
                        comment: '(Attualmente non disponibile)',
                    },
                    selectedWalletComponent: {
                        part1: 'copiato',
                        part2: 'Si prega di inviare utilizzando la',
                        part3: 'rete',
                    },
                },
            },
        },
    });

export default i18n;
