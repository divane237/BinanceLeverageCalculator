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
            // English Section
            en: {
                translation: {
                    // here we will place our translations...
                    language: 'Language',
                    binanceReferalComponent: {
                        part1: "Don't have a Binance account ? Create and verify your account using the referal ID below",
                        part2: 'Binance referal ID: ',
                        part3: 'Click Here !!!',
                    },
                    freeDonationComponent: {
                        part1: 'Wish to offer $10 for coffee ?',
                    },
                    futuresTradingInstruction: {
                        externalLink: 'link',
                        title: 'How to use this Binance calculator',
                        step: 'Step',
                        instruction1:
                            'If you are betting for prices to rise, choose ‘‘Long’’, and if you are betting against the market choose ‘‘Short’’',
                        instruction2:
                            'Enter the cost or margin. Imagine you have 10,000 USDT in your USDS-M Futures wallet and you wish to use only part, let say 6,000. This is the amount you will input on the ‘‘Cost/Margin’’ fill',
                        instruction3: 'Set your entry price',
                        instruction4: 'Set your exit price',
                        instruction5:
                            'Select your leverage between 1 and 50. Remember cryptocurrency market is very volatile',
                        instruction6: `Select your margin mode ‘‘Isolated’’ or ‘‘Cross’’. Selecting ‘‘Cross’’ means your available balance will be used to keep your position open. Meaning of the 6,000 you used, you can now input an amount in the "Wallet Balance" field provided to adjust your liquidation price. The remaining 4,000 could be lost totally if the is no STOP-LOSS mechanism placed. On the other hand, selecting ‘‘Isolated’’, means only your 6,000 will be lost in the event of a liquidation`,
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
                    cryptoArticleComponent: {
                        article1: {
                            title: 'The Liberation Potential of Cryptocurrency: A Global Perspective',
                            section1: `Cryptocurrency has emerged as a revolutionary tool, offering the potential to liberate individuals worldwide, particularly in less developed countries. For instance, many people in Africa, Asia or South America have long wished to invest in global giants like Facebook, Amazon, or Tesla, but have faced significant barriers to access. Imagine a young man from a country with limited access to these opportunities investing in Amazon back in 2000. Thebenefits would have been monumental. Today,cryptocurrencies have enabled the rise of numerous billionaires and millionaires in their local currencies, with countless others finding financial stability and the ability to provide for their families. This newfound wealth allows individuals to mitigate the adverse effects of governmental mismanagement, where officials often prioritize personal interests over the public good. Cryptocurrencies address these problems efficiently, providing instant and hassle-free transactions. This technological innovation not only resolves current financial issues but also holds the potential for even greater societal benefits in the future.`,
                            section2:
                                'In essence, cryptocurrency is more than a financial tool; it is a catalyst for empowerment, offering unprecedented financial freedom and opportunity to individuals around the globe.',
                        },
                        article2: {
                            title: 'Blockchain: The Backbone of Cryptocurrency and Beyond',
                            introduction:
                                ' Blockchain technology, often hailed as the backbone of cryptocurrency, is a revolutionary system that has the potential to transform various industries and redefine the way we conduct transactions, store data, and build trust in digital environments.',
                            section1: {
                                header: 'What is Blockchain?',
                                text: ' At its core, a blockchain is a decentralized, distributed ledger that records transactions across a network of computers. This structure ensures that once data is recorded, it cannot be altered retroactively without altering all subsequent blocks and the consensus of the network. This immutability is what gives blockchain its strength and reliability.',
                            },
                            section2: {
                                title: 'Key Features of Blockchain',

                                part1: {
                                    header: 'Decentralization: ',
                                    text: 'Traditional databases are typically centralized, meaning they are controlled by a single entity. In contrast, blockchain operates on a decentralized network of nodes, each holding a copy of the entire ledger. This decentralization enhances security and reduces the risk of a single point of failure.',
                                },
                                part2: {
                                    header: 'Transparency: ',
                                    text: 'All transactions recorded on a blockchain are transparent and can be viewed by anyone with access to the network. This transparency builds trust among users, as the entire transaction   history is visible and verifiable.',
                                },
                                part3: {
                                    header: 'Security: ',
                                    text: 'Blockchain uses advanced cryptographic techniques to secure data. Each block is linked to the previous one through a cryptographic hash, creating a chain of blocks that is        resistant to tampering. This makes it extremely difficult for hackers to alter the data.',
                                },
                                part4: {
                                    header: 'Immutability: ',
                                    text: 'Once a transaction is recorded on the blockchain, it is nearly impossible to alter or delete it. This immutability ensures the integrity of the data and makes blockchain an ideal solution for applications that require a high degree of trust and reliability.',
                                },
                            },
                            section3: {
                                title: 'Applications of Blockchain',

                                part1: {
                                    header: 'Cryptocurrency:',
                                    text: 'The most well-known application of blockchain is cryptocurrency, such as Bitcoin and Ethereum. These digital currencies rely on blockchain to record transactions and manage the issuance of new units.',
                                },

                                part2: {
                                    header: 'Supply Chain Management:',
                                    text: 'Blockchain can enhance transparency and traceability in supply chains. By recording each step of the production and distribution process on a blockchain, companies can ensure the authenticity and quality of their products.',
                                },

                                part3: {
                                    header: 'Healthcare:',
                                    text: 'In healthcare, blockchain can be used to securely store and share patient records, ensuring that data is accurate, up-to-date, and accessible to authorized personnel only.',
                                },

                                part4: {
                                    header: 'Voting Systems:',
                                    text: 'Blockchain has the potential to revolutionize voting systems by providing a transparent, secure, and tamper-proof method of recording votes, thus enhancing the integrity of elections.',
                                },

                                part5: {
                                    header: 'Smart Contracts:',
                                    text: 'These are self-executing contracts with the terms directly written into code. Smart contracts automatically enforce and execute the terms of an agreement when predefined conditions are met, reducing the need for intermediaries and minimizing the risk of fraud.',
                                },
                            },
                        },
                    },
                },
            },

            // French Section

            fr: {
                translation: {
                    // here we will place our translations...
                    language: 'Langue',
                    binanceReferalComponent: {
                        part1: "Vous n'avez pas de compte Binance ? Créez et vérifiez votre compte en utilisant le code de parrainage ci-dessous",
                        part2: 'Code de parrainage Binance: ',
                        part3: 'Cliquez ici !!!',
                    },
                    freeDonationComponent: {
                        part1: 'Vous souhaitez offrir 10 $ pour un café ?',
                    },
                    futuresTradingInstruction: {
                        externalLink: 'lien',
                        title: 'Comment utiliser cette calculatrice Binance',
                        step: 'Étape',
                        instruction1:
                            'Si vous pariez sur une hausse des prix, choisissez « Acheter », et si vous pariez contre le marché, choisissez « Vendre ».',
                        instruction2:
                            "Entrez le coût ou la marge. Imaginez que vous avez 10 000 USDT dans votre portefeuille Futures USDS-M et que vous souhaitez n'en utiliser qu'une partie, disons 6 000. C'est le montant que vous allez entrer dans le champ « Coût/Marge ».",
                        instruction3: "Définissez votre prix d'entrée.",
                        instruction4: 'Définissez votre prix de sortie.',
                        instruction5:
                            "Sélectionnez votre levier entre 1 et 50. N'oubliez pas que le marché des cryptomonnaies est très volatil.",
                        instruction6:
                            "Sélectionnez votre mode de marge « Isolée » ou « Croisée ». Sélectionner « Croisé » signifie que votre solde disponible sera utilisé pour maintenir votre position ouverte. Cela signifie que sur les 6 000 que vous avez utilisés, vous pouvez maintenant entrer un montant dans le champ 'Solde du portefeuille' fourni pour ajuster votre prix de liquidation. Les 4 000 restants pourraient être totalement perdus s'il n'y a pas de mécanisme STOP-LOSS en place. En revanche, sélectionner « Isolée » signifie que seuls vos 6 000 seront perdus en cas de liquidation.",
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
                    cryptoArticleComponent: {
                        article1: {
                            title: 'La Capacité de Libération des Crypto-monnaies : Une Perspective Globale',
                            section1: `Les crypto-monnaies sont apparues comme un outil révolutionnaire, offrant le potentiel de libérer les individus dans le monde entier, en particulier dans les pays moins développés. Par exemple, de nombreuses personnes en Afrique, en Asie ou en Amérique du Sud souhaitent depuis longtemps investir dans des géants mondiaux tels que Facebook, Amazon ou Tesla, mais se sont heurtées à d'importants obstacles pour y accéder. Imaginez un jeune homme originaire d'un pays où l'accès à ces opportunités est limité et qui aurait investi dans Amazon en 2000. Les bénéfices auraient été monumentaux. Aujourd'hui, les crypto-monnaies ont permis l'ascension de nombreux milliardaires et millionnaires dans leurs monnaies locales, et d'innombrables autres ont trouvé la stabilité financière et la capacité de subvenir aux besoins de leur famille. Cette nouvelle richesse permet aux individus d'atténuer les effets négatifs de la mauvaise gestion gouvernementale, où les fonctionnaires privilégient souvent leurs intérêts personnels au détriment du bien public. Les crypto-monnaies s'attaquent efficacement à ces problèmes, en offrant des transactions instantanées et sans tracas. Cette innovation technologique permet non seulement de résoudre les problèmes financiers actuels, mais offre également la possibilité d'obtenir des avantages sociétaux encore plus importants à l'avenir.`,
                            section2:
                                "En fait, les crypto-monnaies sont plus qu'un outil financier ; c'est un catalyseur d'autonomisation, qui offre une liberté financière et des opportunités sans précédent aux individus du monde entier.",
                        },
                        article2: {
                            title: "La blockchain : L'épine dorsale des crypto-monnaies et au-delà",
                            introduction:
                                "La technologie blockchain, souvent présentée comme l'épine dorsale des crypto-monnaies, est un système révolutionnaire qui a le potentiel de transformer diverses industries et de redéfinir la façon dont nous effectuons les transactions, stockons les données et établissons la confiance dans les environnements numériques.",
                            section1: {
                                header: "Qu'est-ce que la blockchain ?",
                                text: "À la base, une blockchain est un grand livre décentralisé et distribué qui enregistre les transactions sur un réseau d'ordinateurs. Cette structure garantit qu'une fois les données enregistrées, elles ne peuvent être modifiées rétroactivement sans altérer tous les blocs suivants et le consensus du réseau. C'est cette immutabilité qui fait la force et la fiabilité de la blockchain.",
                            },
                            section2: {
                                title: 'Principales caractéristiques de la blockchain',

                                part1: {
                                    header: 'Décentralisation : ',
                                    text: "Les bases de données traditionnelles sont généralement centralisées, ce qui signifie qu'elles sont contrôlées par une seule entité. En revanche, la blockchain fonctionne sur un réseau décentralisé de nœuds, chacun détenant une copie de l'ensemble du grand livre. Cette décentralisation renforce la sécurité et réduit le risque d'un point de défaillance unique.",
                                },
                                part2: {
                                    header: 'La Transparence :',
                                    text: "Toutes les transactions enregistrées sur une blockchain sont transparentes et peuvent être consultées par toute personne ayant accès au réseau. Cette transparence renforce la confiance entre les utilisateurs, car l'ensemble de l'historique des transactions est visible et vérifiable.",
                                },
                                part3: {
                                    header: 'La Sécurité : ',
                                    text: 'La blockchain utilise des techniques cryptographiques avancées pour sécuriser les données. Chaque bloc est lié au précédent par un hachage cryptographique, créant ainsi une chaîne de blocs résistante à la falsification. Il est donc extrêmement difficile pour les pirates de modifier les données.',
                                },
                                part4: {
                                    header: 'Immutabilité: ',
                                    text: "Une fois qu'une transaction est enregistrée sur la blockchain, il est presque impossible de la modifier ou de la supprimer. Cette immutabilité garantit l'intégrité des données et fait de la blockchain une solution idéale pour les applications nécessitant un haut degré de confiance et de fiabilité.",
                                },
                            },
                            section3: {
                                title: 'Utilisations de la blockchain',

                                part1: {
                                    header: 'Les crypto-monnaies :',
                                    text: "L'application la plus connue de la blockchain est la crypto-monnaie, comme le Bitcoin et l'Ethereum. Ces monnaies numériques s'appuient sur la blockchain pour enregistrer les transactions et gérer l'émission de nouvelles unités.",
                                },

                                part2: {
                                    header: "Gestion de la chaîne d'approvisionnement:",
                                    text: "La blockchain peut améliorer la transparence et la traçabilité des chaînes d'approvisionnement. En enregistrant chaque étape du processus de production et de distribution sur une blockchain, les entreprises peuvent garantir l'authenticité et la qualité de leurs produits.",
                                },

                                part3: {
                                    header: 'Secteur de la santé:',
                                    text: 'Dans le domaine de la santé, la blockchain peut être utilisée pour stocker et partager en toute sécurité les dossiers des patients, en veillant à ce que les données soient exactes, à jour et accessibles uniquement au personnel autorisé.',
                                },

                                part4: {
                                    header: 'Systèmes de vote:',
                                    text: "La blockchain a le potentiel de révolutionner les systèmes de vote en fournissant une méthode transparente, sécurisée et infalsifiable d'enregistrement des votes, améliorant ainsi l'intégrité des élections.",
                                },

                                part5: {
                                    header: 'Smart Contracts:',
                                    text: "Il s'agit de contrats auto-exécutoires dont les termes sont directement inscrits dans le code. Les contrats intelligents appliquent et exécutent automatiquement les termes d'un accord lorsque des conditions prédéfinies sont remplies, ce qui réduit le besoin d'intermédiaires et minimise le risque de fraude.",
                                },
                            },
                        },
                    },
                },
            },

            // German Section

            de: {
                translation: {
                    // here we will place our translations...
                    language: 'Sprache',
                    binanceReferalComponent: {
                        part1: 'Sie haben kein Binance-Konto? Erstellen und verifizieren Sie Ihr Konto mit dem unten stehenden Empfehlungscode',
                        part2: 'Binance Empfehlungscode: ',
                        part3: 'Hier klicken !!!',
                    },
                    freeDonationComponent: {
                        part1: 'Möchten Sie 10 USD für einen Kaffee verschenken?',
                    },
                    futuresTradingInstruction: {
                        externalLink: 'Link',
                        title: 'Wie man diesen Binance-Rechner verwendet',
                        step: 'Schritt',
                        instruction1: `Wenn Sie auf steigende Preise setzen, wählen Sie ,,Long’’. Wenn Sie gegen den Markt setzen, wählen Sie ,,Short’’.`,
                        instruction2:
                            'Geben Sie die Kosteßn oder die Marge ein. Stellen Sie sich vor, Sie haben 10.000 USDT in Ihrem USDS-M Futures-Wallet und möchten nur einen Teil davon verwenden, sagen wir 6.000. Diesen Betrag geben Sie im Feld ,,Kosten’’ ein.',
                        instruction3: 'Legen Sie Ihren Einstiegspreis fest.',
                        instruction4: 'Legen Sie Ihren Ausstiegspreis fest.',
                        instruction5:
                            'Wählen Sie einen Hebel zwischen 1 und 50. Denken Sie daran, dass der Kryptowährungsmarkt sehr volatil ist.',
                        instruction6:
                            "Wählen Sie Ihren Margin-Modus: ,,Isolated’’ oder ,,Kreuz’’. Wenn Sie 'Kreuz' wählen, wird Ihr verfügbares Guthaben verwendet, um Ihre Position offen zu halten. Von den 6.000, die Sie eingesetzt haben, können Sie jetzt einen Betrag im Feld 'Wallet-Guthaben' eingeben, um Ihren Liquidationspreis anzupassen. Die restlichen 4.000 könnten komplett verloren gehen, wenn kein STOP-LOSS-Mechanismus vorhanden ist. Wenn Sie jedoch ,,Isoliert’’ wählen, gehen im Falle einer Liquidation nur Ihre 6.000 verloren.",
                        instruction7:
                            'Wählen Sie eine Wartungsmarge, die je nach gehandeltem Paar und Positionsgröße variiert. Sie können dies mit diesem Tool überprüfen',
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
                    cryptoArticleComponent: {
                        article1: {
                            title: 'Das Befreiungspotenzial von Kryptowährungen: Eine globale Perspektive',
                            section1: `Kryptowährungen haben sich als revolutionäres Instrument erwiesen, das das Potenzial hat, Menschen weltweit zu befreien, insbesondere in weniger entwickelten Ländern. Viele Menschen in Afrika, Asien oder Südamerika haben sich zum Beispiel lange gewünscht, in globale Giganten wie Facebook, Amazon oder Tesla zu investieren, sind aber auf erhebliche Zugangshindernisse gestoßen. Stellen Sie sich vor, ein junger Mann aus einem Land mit begrenztem Zugang zu diesen Möglichkeiten hätte im Jahr 2000 in Amazon investiert. Die Vorteile wären gewaltig gewesen. Heute haben Kryptowährungen den Aufstieg zahlreicher Milliardäre und Millionäre in ihren Landeswährungen ermöglicht, während zahllose andere finanzielle Stabilität gefunden haben und in der Lage sind, ihre Familien zu versorgen. Dieser neu gewonnene Reichtum ermöglicht es dem Einzelnen, die negativen Auswirkungen staatlicher Misswirtschaft abzumildern, bei der Beamte oft persönlichen Interessen Vorrang vor dem Gemeinwohl einräumen. Kryptowährungen lösen diese Probleme effizient, indem sie sofortige und problemlose Transaktionen ermöglichen. Diese technologische Innovation löst nicht nur aktuelle finanzielle Probleme, sondern birgt auch das Potenzial für einen noch größeren gesellschaftlichen Nutzen in der Zukunft.`,
                            section2:
                                'Kryptowährungen sind mehr als nur ein finanzielles Instrument; sie sind ein Katalysator, der Menschen auf der ganzen Welt nie dagewesene finanzielle Freiheit und Möglichkeiten bietet.',
                        },
                        article2: {
                            title: 'Blockchain: Das Rückgrat der Kryptowährung und darüber hinaus',
                            introduction:
                                'Die Blockchain-Technologie, die oft als Rückgrat der Kryptowährung gepriesen wird, ist ein revolutionäres System, das das Potenzial hat, verschiedene Branchen zu verändern und die Art und Weise, wie wir Transaktionen durchführen, Daten speichern und Vertrauen in digitalen Umgebungen aufbauen, neu zu definieren.',
                            section1: {
                                header: 'Was bedeutet Blockchain?',
                                text: 'Im Kern ist eine Blockchain ein dezentralisiertes, verteiltes Hauptbuch, das Transaktionen in einem Netzwerk von Computern aufzeichnet. Diese Struktur stellt sicher, dass einmal aufgezeichnete Daten nicht mehr rückwirkend geändert werden können, ohne alle nachfolgenden Blöcke und den Konsens des Netzwerks zu verändern. Diese Unveränderlichkeit verleiht der Blockchain ihre Stärke und Zuverlässigkeit.',
                            },

                            section2: {
                                title: 'Hauptmerkmale von Blockchain',

                                part1: {
                                    header: 'Dezentralisierung: ',
                                    text: 'Herkömmliche Datenbanken sind in der Regel zentralisiert, d. h. sie werden von einer einzigen Stelle kontrolliert. Im Gegensatz dazu arbeitet die Blockchain mit einem dezentralen Netzwerk von Knoten, von denen jeder eine Kopie des gesamten Hauptbuchs besitzt. Diese Dezentralisierung erhöht die Sicherheit und verringert das Risiko eines einzelnen Ausfallpunkts.',
                                },
                                part2: {
                                    header: 'Transparenz:  ',
                                    text: 'Alle in einer Blockchain aufgezeichneten Transaktionen sind transparent und können von jedem mit Zugang zum Netzwerk eingesehen werden. Diese Transparenz schafft Vertrauen unter den Nutzern, da die gesamte Transaktionshistorie sichtbar und überprüfbar ist.',
                                },
                                part3: {
                                    header: 'Sicherheit:',
                                    text: 'Blockchain nutzt fortschrittliche kryptografische Techniken, um Daten zu sichern. Jeder Block ist durch einen kryptografischen Hash mit dem vorherigen verknüpft, wodurch eine Kette von Blöcken entsteht, die vor Manipulationen geschützt ist. Dies macht es für Hacker extrem schwierig, die Daten zu verändern.',
                                },
                                part4: {
                                    header: 'Unveränderlichkeit:',
                                    text: 'Sobald eine Transaktion in der Blockchain aufgezeichnet ist, ist es nahezu unmöglich, sie zu ändern oder zu löschen. Diese Unveränderlichkeit gewährleistet die Integrität der Daten und macht die Blockchain zu einer idealen Lösung für Anwendungen, die ein hohes Maß an Vertrauen und Zuverlässigkeit erfordern.',
                                },
                            },

                            section3: {
                                title: 'Anwendungen der Blockchain',

                                part1: {
                                    header: 'Kryptowährung:',
                                    text: 'Die bekannteste Anwendung der Blockchain ist die Kryptowährung, wie z. B. Bitcoin und Ethereum. Diese digitalen Währungen stützen sich auf Blockchain, um Transaktionen aufzuzeichnen und die Ausgabe neuer Einheiten zu verwalten.',
                                },

                                part2: {
                                    header: 'Lieferkettenmanagement:',
                                    text: 'Blockchain kann die Transparenz und Rückverfolgbarkeit in Lieferketten verbessern. Indem sie jeden Schritt des Produktions- und Vertriebsprozesses in einer Blockchain aufzeichnen, können Unternehmen die Authentizität und Qualität ihrer Produkte sicherstellen.',
                                },

                                part3: {
                                    header: 'Gesundheitswesen:',
                                    text: 'Im Gesundheitswesen kann Blockchain zur sicheren Speicherung und Freigabe von Patientenakten verwendet werden, um sicherzustellen, dass die Daten korrekt und aktuell sind und nur autorisierten Personen zugänglich sind.',
                                },

                                part4: {
                                    header: 'Wahlsysteme:',
                                    text: 'Blockchain hat das Potenzial, Wahlsysteme zu revolutionieren, indem es eine transparente, sichere und fälschungssichere Methode zur Aufzeichnung von Stimmen bietet und so die Integrität von Wahlen verbessert.',
                                },

                                part5: {
                                    header: 'Smart Contracts:',
                                    text: 'Dies sind selbstausführende Verträge, bei denen die Bedingungen direkt in den Code geschrieben werden. Intelligente Verträge setzen die Bedingungen einer Vereinbarung automatisch durch und führen sie aus, wenn vordefinierte Bedingungen erfüllt sind, wodurch der Bedarf an Vermittlern verringert und das Betrugsrisiko minimiert wird.',
                                },
                            },
                        },
                    },
                },
            },

            // Russian Section

            ru: {
                translation: {
                    // here we will place our translations...
                    language: 'Язык',
                    binanceReferalComponent: {
                        part1: 'У вас нет аккаунта на Binance? Создайте и подтвердите свой аккаунт, используя указанный ниже реферальный код',
                        part2: 'Реферальный код Binance: ',
                        part3: 'Нажмите здесь',
                    },
                    freeDonationComponent: {
                        part1: 'Хотите подарить $10 на кофе?',
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
                    cryptoArticleComponent: {
                        article1: {
                            title: 'Освободительный потенциал криптовалюты: Глобальная перспектива',
                            section1: `Криптовалюта стала революционным инструментом, способным освободить людей по всему миру, особенно в менее развитых странах. Например, многие люди в Африке, Азии или Южной Америке давно хотели инвестировать в таких мировых гигантов, как Facebook, Amazon или Tesla, но сталкивались с серьезными препятствиями на пути к этому. Представьте себе молодого человека из страны с ограниченным доступом к таким возможностям, инвестирующего в Amazon в 2000 году. Выгоды были бы колоссальными. Сегодня криптовалюты позволили стать миллиардерами и миллионерами в своих местных валютах, а бесчисленное множество других людей обрели финансовую стабильность и возможность обеспечивать свои семьи. Это вновь обретенное богатство позволяет людям смягчить негативные последствия правительственной бесхозяйственности, когда чиновники часто ставят личные интересы выше общественного блага. Криптовалюты эффективно решают эти проблемы, обеспечивая мгновенные и беззаботные транзакции. Эта технологическая инновация не только решает текущие финансовые проблемы, но и способна принести еще больше пользы обществу в будущем.`,
                            section2:
                                'По сути, криптовалюта - это не просто финансовый инструмент, это катализатор расширения прав и возможностей, предоставляющий беспрецедентную финансовую свободу и возможности людям по всему миру.',
                        },

                        article2: {
                            title: 'Blockchain: Основа криптовалюты и не только',
                            introduction:
                                ' Blockchain technology, often hailed as the backbone of cryptocurrency, is a revolutionary system that has the potential to transform various industries and redefine the way we conduct transactions, store data, and build trust in digital environments.',
                            section1: {
                                header: 'Что такое блокчейн?',
                                text: 'По своей сути блокчейн - это децентрализованная, распределенная бухгалтерская книга, которая записывает транзакции в сети компьютеров. Такая структура гарантирует, что после записи данных они не могут быть изменены задним числом без изменения всех последующих блоков и консенсуса сети. Именно эта неизменяемость придает блокчейну прочность и надежность.',
                            },
                            section2: {
                                title: 'Ключевые особенности блокчейна',

                                part1: {
                                    header: 'Децентрализация:',
                                    text: 'Традиционные базы данных обычно централизованы, то есть контролируются одним человеком. В отличие от них, блокчейн работает в децентрализованной сети узлов, каждый из которых хранит копию всей бухгалтерской книги. Такая децентрализация повышает безопасность и снижает риск возникновения единой точки отказа.',
                                },
                                part2: {
                                    header: 'Прозрачность: ',
                                    text: 'Все транзакции, записанные в блокчейне, прозрачны и могут быть просмотрены любым человеком, имеющим доступ к сети. Такая прозрачность укрепляет доверие между пользователями, поскольку вся история транзакций видна и проверяема.',
                                },
                                part3: {
                                    header: 'Безопасность: ',
                                    text: 'Блокчейн использует передовые криптографические технологии для защиты данных. Каждый блок связан с предыдущим с помощью криптографического хэша, создавая цепочку блоков, устойчивую к взлому. Таким образом, хакерам крайне сложно изменить данные.',
                                },
                                part4: {
                                    header: 'Неизменность: ',
                                    text: 'Как только транзакция записывается в блокчейн, ее практически невозможно изменить или удалить. Такая неизменяемость гарантирует целостность данных и делает блокчейн идеальным решением для приложений, требующих высокой степени доверия и надежности.',
                                },
                            },
                            section3: {
                                title: 'Области применения блокчейна',

                                part1: {
                                    header: 'Криптовалюта::',
                                    text: 'Наиболее известным применением блокчейна является криптовалюта, такая как Bitcoin и Ethereum. Эти цифровые валюты используют блокчейн для записи транзакций и управления эмиссией новых единиц.',
                                },

                                part2: {
                                    header: 'Управление цепочками поставок:',
                                    text: 'Блокчейн может повысить прозрачность и прослеживаемость цепочек поставок. Записывая каждый шаг процесса производства и распространения в блокчейн, компании могут гарантировать подлинность и качество своей продукции.',
                                },

                                part3: {
                                    header: 'Здравоохранение:',
                                    text: 'В здравоохранении блокчейн может использоваться для безопасного хранения и обмена записями пациентов, обеспечивая точность, актуальность и доступность данных только для авторизованного персонала.',
                                },

                                part4: {
                                    header: 'Системы голосования:',
                                    text: 'Блокчейн способен произвести революцию в системах голосования, обеспечив прозрачный, безопасный и защищенный от взлома метод записи голосов, что повысит честность выборов',
                                },

                                part5: {
                                    header: 'Умные контракты:',
                                    text: 'Это самоисполняющиеся контракты, условия которых записаны непосредственно в коде. Смарт-контракты автоматически приводят в исполнение условия соглашения при выполнении заранее определенных условий, снижая необходимость в посредниках и минимизируя риск мошенничества.',
                                },
                            },
                        },
                    },
                },
            },

            // Chinese Section

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
                        part1: '希望赠送 10 美元的咖啡 ?',
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
                    cryptoArticleComponent: {
                        article1: {
                            title: '加密货币的解放潜力： 全球视角',
                            section1: `加密货币已成为一种革命性的工具，为解放全世界的个人，特别是欠发达国家的个人提供了潜力。例如，非洲、亚洲或南美洲的许多人长期以来一直希望投资 Facebook、亚马逊或特斯拉等全球巨头，但却面临着巨大的准入障碍。想象一下，在 2000 年，一个来自机会有限的国家的年轻人投资了亚马逊。这将带来巨大的收益。如今，加密货币已经让无数亿万富翁和百万富翁以他们当地的货币崛起，还有无数人找到了财务稳定和养家糊口的能力。这种新发现的财富使个人能够减轻政府管理不善带来的不利影响，因为政府官员往往将个人利益置于公共利益之上。加密货币能有效解决这些问题，提供即时、无障碍的交易。这一技术创新不仅解决了当前的金融问题，而且有可能在未来带来更大的社会效益。`,
                            section2:
                                '从本质上讲，加密货币不仅仅是一种金融工具；它还是一种赋权催化剂，为全球个人提供前所未有的财务自由和机会。',
                        },
                        article2: {
                            title: '区块链： 加密货币及其他技术的支柱',
                            introduction:
                                '区块链技术经常被誉为加密货币的支柱，它是一个革命性的系统，有可能改变各行各业，重新定义我们在数字环境中进行交易、存储数据和建立信任的方式。',
                            section1: {
                                header: '什么是区块链?',
                                text: '区块链的核心是一个去中心化的分布式账本，用于记录计算机网络中的交易。这种结构确保数据一旦被记录，就无法在不改变所有后续区块和网络共识的情况下进行追溯更改。这种不变性赋予了区块链力量和可靠性.',
                            },
                            section2: {
                                title: '区块链的主要特点',

                                part1: {
                                    header: '去中心化: ',
                                    text: '传统数据库通常是中心化的，即由单一实体控制。相比之下，区块链是在由节点组成的去中心化网络上运行的，每个节点都拥有整个账本的副本。这种分散性增强了安全性，降低了单点故障的风险、',
                                },
                                part2: {
                                    header: '透明度：',
                                    text: '区块链上记录的所有交易都是透明的，任何可以访问网络的人都可以查看。这种透明度在用户之间建立了信任，因为整个交易历史都是可见和可验证的、',
                                },
                                part3: {
                                    header: '安全性: ',
                                    text: '区块链使用先进的加密技术确保数据安全。每个区块都通过加密哈希值与前一个区块相连，从而形成一个无法篡改的区块链。这使得黑客极难篡改数据、',
                                },
                                part4: {
                                    header: '不变性： ',
                                    text: '交易一旦记录在区块链上，几乎不可能被更改或删除。这种不变性确保了数据的完整性，使区块链成为需要高度信任和可靠性的应用的理想解决方案。',
                                },
                            },
                            section3: {
                                title: '区块链的应用',

                                part1: {
                                    header: '加密货币:',
                                    text: '区块链最著名的应用是加密货币，如比特币和以太坊。这些数字货币依靠区块链来记录交易和管理新单位的发行、',
                                },

                                part2: {
                                    header: '供应链管理:',
                                    text: '区块链可以提高供应链的透明度和可追溯性。通过在区块链上记录生产和分销过程的每一步，公司可以确保产品的真实性和质量。',
                                },

                                part3: {
                                    header: '医疗保健：',
                                    text: '在医疗保健领域，区块链可用于安全地存储和共享患者记录，确保数据准确、及时更新，并且只有授权人员才能访问。',
                                },

                                part4: {
                                    header: '投票系统:',
                                    text: '区块链提供了一种透明、安全、防篡改的投票记录方法，从而提高了选举的公正性，具有彻底改变投票系统的潜力。',
                                },

                                part5: {
                                    header: '智能合约: ',
                                    text: '这些都是自动执行的合约，其条款直接写入代码。智能合约在满足预定义条件时自动执行协议条款，减少了对中介的需求，最大限度地降低了欺诈风险。',
                                },
                            },
                        },
                    },
                },
            },

            // Spanish Section

            spa: {
                translation: {
                    // here we will place our translations...
                    language: 'Idioma',
                    binanceReferalComponent: {
                        part1: '¿No tienes una cuenta en Binance? Crea y verifica tu cuenta utilizando el código de referencia que se encuentra a continuación',
                        part2: 'Código de referencia de Binance: ',
                        part3: '¡Haz clic aquí!',
                    },
                    freeDonationComponent: {
                        part1: '¿Desea regalar 10 $ para un café?',
                    },
                    futuresTradingInstruction: {
                        externalLink: 'enlace',
                        title: 'Cómo usar esta calculadora de Binance',
                        step: 'Paso',
                        instruction1:
                            'Si apuestas a que los precios subirán, elige ‘‘Comprar’’. Si apuestas contra el mercado, elige ‘‘Vender’’.',
                        instruction2:
                            'Ingrese el costo o margen. Por ejemplo, si tienes 10,000 USDT en tu billetera de futuros USDS-M y deseas usar solo una parte, digamos 6,000, esta es la cantidad que ingresarás en el campo ‘‘Costo’’.',
                        instruction3: 'Establece tu precio de entrada.',
                        instruction4: 'Establece tu precio de salida.',
                        instruction5:
                            'Elige tu apalancamiento entre 1 y 50. Recuerda que el mercado de criptomonedas es muy volátil.',
                        instruction6:
                            "Selecciona tu modo de margen: ‘‘Aislado’’ o ‘‘Cruzado’’. Elegir ‘‘Cruzado’’ significa que tu saldo disponible se utilizará para mantener tu posición abierta. De los 6,000 que usaste, puedes ahora ingresar un monto en el campo 'Saldo de la billetera' para ajustar tu precio de liquidación. Los 4,000 restantes podrían perderse totalmente si no hay un mecanismo de STOP-LOSS. En cambio, seleccionar ‘‘Aislado’’ significa que solo tus 6,000 se perderán en caso de una liquidación.",
                        instruction7:
                            'Selecciona una tasa de margen de mantenimiento, que varía según el par que negocies y el tamaño de tu posición. Puedes verificar esto con esta herramienta',
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
                    cryptoArticleComponent: {
                        article1: {
                            title: 'El potencial de liberación de las criptomonedas: Una perspectiva global',
                            section1: `La criptomoneda ha surgido como una herramienta revolucionaria que ofrece la posibilidad de liberar a las personas en todo el mundo, especialmente en los países menos desarrollados. Por ejemplo, muchas personas de África, Asia o Sudamérica llevan mucho tiempo deseando invertir en gigantes mundiales como Facebook, Amazon o Tesla, pero se han encontrado con importantes barreras de acceso. Imaginemos a un joven de un país con acceso limitado a estas oportunidades invirtiendo en Amazon allá por el año 2000. Los beneficios habrían sido monumentales. Hoy en día, las criptomonedas han permitido el ascenso de numerosos multimillonarios y millonarios en sus monedas locales, y muchos otros han encontrado estabilidad financiera y la capacidad de mantener a sus familias. Esta nueva riqueza permite a los individuos mitigar los efectos adversos de la mala gestión gubernamental, en la que los funcionarios suelen priorizar los intereses personales sobre el bien público. Las criptomonedas abordan estos problemas de manera eficiente, proporcionando transacciones instantáneas y sin complicaciones. Esta innovación tecnológica no sólo resuelve los problemas financieros actuales, sino que también puede aportar mayores beneficios sociales en el futuro.`,
                            section2:
                                'Fundamentalmente, la criptomoneda es más que una herramienta financiera: es un catalizador de la autonomía, que ofrece una libertad y unas oportunidades financieras sin precedentes a personas de todo el mundo.',
                        },
                        article2: {
                            title: 'Blockchain: La columna vertebral de la criptomoneda y más allá',
                            introduction:
                                'La tecnología Blockchain, a menudo aclamada como la columna vertebral de la criptomoneda, es un sistema revolucionario que tiene el potencial de transformar varias industrias y redefinir la forma en que realizamos transacciones, almacenamos datos y creamos confianza en los entornos digitales.',
                            section1: {
                                header: '¿Qué es Blockchain?',
                                text: 'En esencia, una cadena de bloques es un libro de contabilidad descentralizado y distribuido que registra transacciones en una red de ordenadores. Esta estructura garantiza que, una vez registrados los datos, no puedan alterarse retroactivamente sin alterar todos los bloques posteriores y el consenso de la red. Esta inmutabilidad es lo que confiere a blockchain su fuerza y fiabilidad',
                            },
                            section2: {
                                title: 'Características clave de Blockchain',

                                part1: {
                                    header: 'Descentralización: ',
                                    text: 'Las bases de datos tradicionales suelen estar centralizadas, es decir, controladas por una única entidad. En cambio, blockchain funciona en una red descentralizada de nodos, cada uno de los cuales posee una copia de todo el libro de contabilidad. Esta descentralización mejora la seguridad y reduce el riesgo de un único punto de fallo.',
                                },
                                part2: {
                                    header: 'Transparencia: ',
                                    text: 'Todas las transacciones registradas en una cadena de bloques son transparentes y pueden ser vistas por cualquiera con acceso a la red. Esta transparencia genera confianza entre los usuarios, ya que todo el historial de transacciones es visible y verificable.',
                                },
                                part3: {
                                    header: 'Seguridad: ',
                                    text: 'Blockchain utiliza técnicas criptográficas avanzadas para asegurar los datos. Cada bloque está vinculado al anterior a través de un hash criptográfico, creando una cadena de bloques que es resistente a la manipulación. Esto dificulta enormemente que los piratas informáticos alteren los datos.',
                                },
                                part4: {
                                    header: 'Inmutabilidad: ',
                                    text: 'Una vez que una transacción se registra en la cadena de bloques, es casi imposible alterarla o borrarla. Esta inmutabilidad garantiza la integridad de los datos y hace de blockchain una solución ideal para aplicaciones que requieren un alto grado de confianza y fiabilidad.',
                                },
                            },
                            section3: {
                                title: 'Usos de Blockchain',

                                part1: {
                                    header: 'Criptomoneda:',
                                    text: ' El uso más conocido de blockchain es la criptomoneda, como Bitcoin y Ethereum. Estas monedas digitales se basan en blockchain para registrar transacciones y gestionar la emisión de nuevas unidades.',
                                },

                                part2: {
                                    header: 'Gestión de la cadena de suministro:',
                                    text: 'Blockchain puede mejorar la transparencia y la trazabilidad en las cadenas de suministro. Al registrar cada paso del proceso de producción y distribución en una blockchain, las empresas pueden garantizar la autenticidad y calidad de sus productos.',
                                },

                                part3: {
                                    header: 'Sanidad:',
                                    text: 'En la atención sanitaria, blockchain puede utilizarse para almacenar y compartir de forma segura los historiales de los pacientes, garantizando que los datos sean precisos, estén actualizados y solo sean accesibles para el personal autorizado.',
                                },

                                part4: {
                                    header: 'Sistemas de votación:',
                                    text: 'Blockchain tiene el potencial de revolucionar los sistemas de votación al proporcionar un método transparente, seguro y a prueba de manipulaciones para registrar los votos, mejorando así la integridad de las elecciones',
                                },

                                part5: {
                                    header: 'Smart Contracts:',
                                    text: 'Son contratos autoejecutables con los términos directamente escritos en el código. Los contratos inteligentes aplican y ejecutan automáticamente los términos de un acuerdo cuando se cumplen unas condiciones predefinidas, lo que reduce la necesidad de intermediarios y minimiza el riesgo de fraude.',
                                },
                            },
                        },
                    },
                },
            },

            // Italian Section
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
                        part1: 'Desidera regalare 10 dollari per un caffè?',
                    },
                    futuresTradingInstruction: {
                        externalLink: 'link',
                        title: 'Come usare questo calcolatore di Binance',
                        step: 'Passo',
                        instruction1:
                            'Se prevedi un aumento dei prezzi, scegli ‘‘Acquista’’. Se prevedi una diminuzione, scegli ‘‘Vendi’’ .',
                        instruction2:
                            "Inserisci il costo o il margine. Ad esempio, se hai 10.000 USDT nel tuo portafoglio Futures USDS-M e vuoi usarne solo una parte, diciamo 6.000, questa è la somma che inserirai nel campo 'costo/margine'.",
                        instruction3: 'Imposta il tuo prezzo di entrata.',
                        instruction4: 'Imposta il tuo prezzo di uscita.',
                        instruction5:
                            'Seleziona la tua leva tra 1 e 50. Ricorda che il mercato delle criptovalute è molto volatile.',
                        instruction6: `Seleziona la tua modalità di margine ‘‘Isolato’’ o ‘‘Incrociato’’. Selezionando "Incrociato" il tuo saldo disponibile sarà utilizzato per mantenere aperta la tua posizione. Significa che dei 6.000 che hai utilizzato, puoi ora inserire un importo nel campo ‘‘Saldo del portafoglio’’ fornito per regolare il tuo prezzo di liquidazione. I restanti 4.000 potrebbero essere persi totalmente se non è presente un meccanismo di STOP-LOSS. D'altra parte, selezionando ‘‘Isolato’’, significa che solo i tuoi 6.000 saranno persi in caso di liquidazione.`,
                        instruction7: `Seleziona un tasso di margine di mantenimento, che varia a seconda della coppia che scambi e della dimensione della tua posizione. Puoi controllarlo usando questo`,
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
                    cryptoArticleComponent: {
                        article1: {
                            title: 'Il potenziale di liberazione delle criptovalute: Una prospettiva globale',
                            section1: `Le criptovalute sono emerse come uno strumento rivoluzionario, che offre il potenziale per liberare gli individui in tutto il mondo, in particolare nei Paesi meno sviluppati. Ad esempio, molte persone in Africa, Asia o Sud America hanno a lungo desiderato investire in giganti globali come Facebook, Amazon o Tesla, ma hanno dovuto affrontare notevoli barriere di accesso. Immaginate un giovane di un Paese con accesso limitato a queste opportunità che investe in Amazon nel 2000. I benefici sarebbero stati monumentali. Oggi, le criptovalute hanno permesso l'ascesa di numerosi miliardari e milionari nelle loro valute locali, mentre innumerevoli altri hanno trovato la stabilità finanziaria e la possibilità di provvedere alle loro famiglie. Questa nuova ricchezza permette agli individui di mitigare gli effetti negativi della cattiva gestione governativa, in cui i funzionari spesso privilegiano gli interessi personali rispetto al bene pubblico. Le criptovalute affrontano questi problemi in modo efficiente, fornendo transazioni istantanee e senza problemi. Questa innovazione tecnologica non solo risolve gli attuali problemi finanziari, ma ha anche il potenziale per offrire benefici sociali ancora maggiori in futuro.`,
                            section2:
                                "All'essenza, le criptovalute sono più di uno strumento finanziario: sono un catalizzatore di potere, che offre libertà e opportunità finanziarie senza precedenti agli individui di tutto il mondo.",
                        },
                        article2: {
                            title: 'Blockchain: La spina dorsale delle criptovalute e oltre',
                            introduction:
                                ' La tecnologia blockchain, spesso acclamata come la spina dorsale delle criptovalute, è un sistema rivoluzionario che ha il potenziale per trasformare diversi settori e ridefinire il modo in cui conduciamo le transazioni, archiviamo i dati e creiamo fiducia negli ambienti digitali.',
                            section1: {
                                header: "Cos'è la Blockchain?",
                                text: 'Nel suo nucleo, una blockchain è un registro decentralizzato e distribuito che registra le transazioni attraverso una rete di computer. Questa struttura garantisce che una volta registrati i dati, questi non possano essere modificati retroattivamente senza alterare tutti i blocchi successivi e il consenso della rete. Questa immutabilità è ciò che conferisce alla blockchain la sua forza e affidabilità.',
                            },
                            section2: {
                                title: 'Caratteristiche principali di Blockchain',

                                part1: {
                                    header: 'Decentramento:',
                                    text: "I database tradizionali sono tipicamente centralizzati, cioè controllati da un'unica entità. Al contrario, la blockchain opera su una rete decentralizzata di nodi, ognuno dei quali possiede una copia dell'intero libro mastro. Questa decentralizzazione aumenta la sicurezza e riduce il rischio di un singolo punto di guasto.",
                                },
                                part2: {
                                    header: 'Trasparenza:',
                                    text: "Tutte le transazioni registrate su una blockchain sono trasparenti e possono essere visualizzate da chiunque abbia accesso alla rete. Questa trasparenza crea fiducia tra gli utenti, poiché l'intera storia delle transazioni è visibile e verificabile",
                                },
                                part3: {
                                    header: 'Sicurezza:',
                                    text: 'Blockchain utilizza tecniche crittografiche avanzate per proteggere i dati. Ogni blocco è collegato al precedente attraverso un hash crittografico, creando una catena di blocchi resistente alle manomissioni. Questo rende estremamente difficile per gli hacker alterare i dati',
                                },
                                part4: {
                                    header: 'Immutabilità:',
                                    text: "Una volta che una transazione viene registrata sulla blockchain, è quasi impossibile alterarla o cancellarla. Questa immutabilità garantisce l'integrità dei dati e rende la blockchain una soluzione ideale per le applicazioni che richiedono un alto grado di fiducia e affidabilità",
                                },
                            },
                            section3: {
                                title: 'Utilizzi della Blockchain',

                                part1: {
                                    header: 'Criptovalute:',
                                    text: "L'applicazione più nota della blockchain sono le criptovalute, come Bitcoin ed Ethereum. Queste valute digitali si basano sulla blockchain per registrare le transazioni e gestire l'emissione di nuove unità.",
                                },

                                part2: {
                                    header: 'Gestione della catena di approvvigionamento:',
                                    text: "Blockchain può migliorare la trasparenza e la tracciabilità delle catene di approvvigionamento. Registrando ogni fase del processo di produzione e distribuzione su una blockchain, le aziende possono garantire l'autenticità e la qualità dei loro prodotti.",
                                },

                                part3: {
                                    header: 'Sanità:',
                                    text: 'Nel settore sanitario, la blockchain può essere utilizzata per archiviare e condividere in modo sicuro le cartelle cliniche dei pazienti, garantendo che i dati siano accurati, aggiornati e accessibili solo al personale autorizzato.',
                                },

                                part4: {
                                    header: 'Sistemi di voto:',
                                    text: "Blockchain ha il potenziale per rivoluzionare i sistemi di voto fornendo un metodo trasparente, sicuro e a prova di manomissione per registrare i voti, migliorando così l'integrità delle elezioni",
                                },

                                part5: {
                                    header: 'Smart Contracts:',
                                    text: 'Si tratta di contratti autoesecutivi con i termini scritti direttamente nel codice. I contratti intelligenti applicano ed eseguono automaticamente i termini di un accordo quando vengono soddisfatte condizioni predefinite, riducendo la necessità di intermediari e minimizzando il rischio di frodi.',
                                },
                            },
                        },
                    },
                },
            },
        },
    });

export default i18n;
