import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>words. by Micah Walter</title>
        <meta name="description" content="words. by Micah Walter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          words.
        </h1>
        
        <p className={styles.description}>
          a prototype
        </p>
      </main>

      <footer>
      </footer>
    </div>
  )
}
