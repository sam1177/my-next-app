import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function Home(props) {
  return (
    <div className={styles.container}>
        <h1>{props.host}</h1>
    </div>
  )
}

export default Home;
