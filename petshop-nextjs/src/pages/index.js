import styles from './page.module.css'
import Sobre from '../../components/Sobre'
import Principal from '../../components/Principal'

export default function Home() {
  return (
    <main className={styles.main}>
      <Principal />
      <Sobre />
    </main>
  )
}
