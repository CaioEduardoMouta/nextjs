
import styles from '../styles/Home.module.css'

import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Página principal</title>
        <meta name="keywords" content="lorem, ipsum, dolor"></meta>
        <meta name="description" content="lorem ipsum dolor"></meta>
      </Head>
      <div>
        <h1 className={styles.title}>Hello World Next.js</h1>
        <Image 
        src="/images/setup.jpg" 
        width="200px" 
        height="200px" 
        alt="Java"/>
      </div>
    </>
  )
}
