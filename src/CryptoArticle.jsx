import { useTranslation } from 'react-i18next';

import { useFixProps } from './context/MyProviders';

function CryptoArticle() {
    const { articleRef } = useFixProps();

    const { t } = useTranslation();

    return (
        <div className="py-8 lg:col-span-2 " ref={articleRef}>
            <div className="my-6 px-5 font-poppins lg:col-start-1">
                <article>
                    <h1 className="my-2 text-center text-xl font-bold md:text-2xl">
                        {t('cryptoArticleComponent.article1.title')}
                    </h1>
                    <section className="flex flex-col gap-2 md:text-lg">
                        <div className="flex justify-around gap-1 p-1">
                            <img
                                src="./images/AsianOnSmartPhone1.jpg"
                                className="aspect-square w-1/2 rounded-xl md:w-[30vw]"
                            />
                            <img
                                src="./images/AsianOnSmartPhone2.jpg"
                                className="aspect-square w-1/2 rounded-xl md:w-[30vw]"
                            />
                        </div>
                        <p className="text-justify">
                            {t('cryptoArticleComponent.article1.section1')}
                        </p>
                    </section>

                    <section className="my-5 flex flex-col items-center gap-2 md:text-lg">
                        <img
                            src="./images/BitcoinIsTheCurrency.jpg"
                            className="aspect-square w-1/2 rounded-xl md:w-[30vw]"
                        />
                        <p className="text-justify">
                            {t('cryptoArticleComponent.article1.section2')}
                        </p>
                    </section>
                </article>

                <article>
                    <h1 className="my-3 text-center text-2xl font-bold">
                        {t('cryptoArticleComponent.article2.title')}
                    </h1>

                    <p className="text-justify">
                        {t('cryptoArticleComponent.article2.introduction')}
                    </p>

                    <section>
                        <h2 className="my-2 text-left text-lg font-semibold">
                            {/* What is Blockchain? */}
                            {t(
                                'cryptoArticleComponent.article2.section1.header',
                            )}
                        </h2>
                        <p className="text-justify">
                            {t('cryptoArticleComponent.article2.section1.text')}
                        </p>
                    </section>

                    <section className="px-6">
                        <h2 className="my-2 text-center text-lg font-semibold underline">
                            {t(
                                'cryptoArticleComponent.article2.section2.title',
                            )}
                        </h2>
                        <ol className="list-outside list-decimal">
                            <li>
                                <h3 className="my-1 font-[550]">
                                    {t(
                                        'cryptoArticleComponent.article2.section2.part1.header',
                                    )}
                                </h3>
                                <p className="text-justify">
                                    {t(
                                        'cryptoArticleComponent.article2.section2.part1.text',
                                    )}
                                </p>
                            </li>
                            <li>
                                <h3 className="my-1 font-[550]">
                                    {t(
                                        'cryptoArticleComponent.article2.section2.part2.header',
                                    )}
                                </h3>
                                <p className="text-justify">
                                    {t(
                                        'cryptoArticleComponent.article2.section2.part2.text',
                                    )}
                                </p>
                            </li>
                            <li>
                                <h3 className="my-1 font-[550]">
                                    {t(
                                        'cryptoArticleComponent.article2.section2.part3.header',
                                    )}
                                </h3>
                                <p className="text-justify">
                                    {t(
                                        'cryptoArticleComponent.article2.section2.part3.text',
                                    )}
                                </p>
                            </li>
                            <li>
                                <h3 className="my-1 font-[550]">
                                    {t(
                                        'cryptoArticleComponent.article2.section2.part4.header',
                                    )}
                                </h3>
                                <p className="text-justify">
                                    {t(
                                        'cryptoArticleComponent.article2.section2.part4.text',
                                    )}
                                </p>
                            </li>
                        </ol>
                    </section>

                    <section className="px-6">
                        <h2 className="my-2 text-center text-lg font-semibold underline">
                            {t(
                                'cryptoArticleComponent.article2.section3.title',
                            )}
                        </h2>
                        <ol className="list-outside list-decimal">
                            <li>
                                <h3 className="my-1 font-[550]">
                                    {t(
                                        'cryptoArticleComponent.article2.section3.part1.header',
                                    )}
                                </h3>
                                <p className="text-justify">
                                    {t(
                                        'cryptoArticleComponent.article2.section3.part1.text',
                                    )}
                                </p>
                            </li>
                            <li>
                                <h3 className="my-1 font-[550]">
                                    {t(
                                        'cryptoArticleComponent.article2.section3.part2.header',
                                    )}
                                </h3>
                                <p className="text-justify">
                                    {t(
                                        'cryptoArticleComponent.article2.section3.part2.text',
                                    )}
                                </p>
                            </li>
                            <li>
                                <h3 className="my-1 font-[550]">
                                    {t(
                                        'cryptoArticleComponent.article2.section3.part3.header',
                                    )}
                                </h3>
                                <p className="text-justify">
                                    {t(
                                        'cryptoArticleComponent.article2.section3.part3.text',
                                    )}
                                </p>
                            </li>
                            <li>
                                <h3 className="my-1 font-[550]">
                                    {t(
                                        'cryptoArticleComponent.article2.section3.part4.header',
                                    )}
                                </h3>
                                <p className="text-justify">
                                    {t(
                                        'cryptoArticleComponent.article2.section3.part4.text',
                                    )}
                                </p>
                            </li>
                            <li>
                                <h3 className="my-1 font-[550]">
                                    {t(
                                        'cryptoArticleComponent.article2.section3.part5.header',
                                    )}
                                </h3>
                                <p className="text-justify">
                                    {t(
                                        'cryptoArticleComponent.article2.section3.part5.text',
                                    )}
                                </p>
                            </li>
                        </ol>
                    </section>
                </article>
            </div>
        </div>
    );
}

export default CryptoArticle;
