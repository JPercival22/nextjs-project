import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components-list/footer'
import Navbar from '../components-list/navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Home Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, dolor.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, dolor.</p>
      <Link href="/subs">
        <a>See components list . . .</a>
      </Link>
    </div>
  )
}
