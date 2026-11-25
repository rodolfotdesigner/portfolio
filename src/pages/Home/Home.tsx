import { useCallback, useState } from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../sections/Hero/Hero'
import Projects from '../../sections/Projects/Projects'
import About from '../../sections/About/About'
import styles from './Home.module.css'

export default function Home() {
  const [heroIntroComplete, setHeroIntroComplete] = useState(false)
  const markHeroIntroComplete = useCallback(() => {
    setHeroIntroComplete(true)
  }, [])

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Hero onIntroComplete={markHeroIntroComplete} />
        <Projects heroIntroComplete={heroIntroComplete} />
        <About />
      </main>
    </>
  )
}
