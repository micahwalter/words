import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

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
        
        <Link href="/hello">
          <a>hello.</a>
        </Link>
      </main>

      <footer className={styles.footer}>
        <Link href="https://www.micahwalter.com">
          <a>micahwalter.com</a>
        </Link>      
      </footer>
    </div>
  )
}