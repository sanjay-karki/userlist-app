import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { ExclamationCircleOutlined  } from "@ant-design/icons";

export default function Home() {

  return (
    <div>
      <Head>
        <title>Page not found</title>
      </Head>
      <main>
        <h1 className={styles.title}>
          ERROR 404
        </h1>
        <div className={styles.errorIcon}>
            <span><ExclamationCircleOutlined /></span>
        </div>
        <div className={styles.errorText}>
            <h3><Link href="/">GO BACK TO HOMEPAGE</Link></h3>
        </div>
      </main>
    </div>
  )
}