import Head from 'next/head'
import styles from '../styles/Words.module.css'

import { getAllWordsIds, getWordsData } from '../lib/words'

export async function getStaticProps({ params }) {
    const wordsData = await getWordsData(params.id)
    return {
        props: {
        wordsData
        }
    }
}

export async function getStaticPaths() {
    const paths = getAllWordsIds()
    return {
        paths,
        fallback: false
    }
}

export default function Words({wordsData}) {
    return (
        <div className={styles.container}>
            <Head>
            <title>{wordsData.title ? (`${wordsData.title} | `):("")}words. by Micah Walter</title>
            <meta name="description" content={wordsData.title ? (`${wordsData.title} | words. by Micah Walter`):("words. by Micah Walter")} />
            <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
            <h1 className={styles.title}>
                {wordsData.title ? (
                wordsData.title   
                ):(<>words.
                </>)}  
            </h1>
            
            <div dangerouslySetInnerHTML={{ __html: wordsData.contentHtml }} />
            </main>

            <footer>
            </footer>
        </div>
    )
}