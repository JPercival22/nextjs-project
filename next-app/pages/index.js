import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam doloremque vero pariatur ex exercitationem expedita ipsam quia veritatis obcaecati.</p>
      <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, maxime? Ipsa illo quas eos, officia eum laborum rem perferendis maiores!</p>
      <Link href="/subs">
        <a className={styles.btn}>See components list</a>
      </Link>
    </div>
  )
}
