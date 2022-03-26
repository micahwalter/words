import Head from 'next/head'
import styles from '../styles/Home.module.css'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

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
          <Content />
        </p>
      </main>

      <footer>
      </footer>
    </div>
  )
}

function useHello () {
  const { data, error } = useSWR(`/api/hello`, fetcher)

  return {
    says: data,
    isLoading: !error && !data,
    isError: error
  }
}

function Spinner () {
  return <p>Loading...</p>
}

function Content () {
  const { says, isLoading } = useHello()
  if (isLoading) return <Spinner />
  return <p>{says.saying}</p>
}