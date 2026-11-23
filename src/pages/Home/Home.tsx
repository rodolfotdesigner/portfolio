import Header from '../../components/Header/Header'
import Hero from '../../sections/Hero/Hero'
import Projects from '../../sections/Projects/Projects'
import styles from './Home.module.css'

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Hero />
        <Projects />
      </main>
    </>
  )
}
