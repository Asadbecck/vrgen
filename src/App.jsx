import styles from './style'
import { Header, Navbar } from './components'
import Business from './components/Business'
import { Header, Navbar, Stats, Video } from './components'
import EsiesCantrol from './components/EsiesCantrol'

export default function App() {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>


      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            <Header/>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            <Business />
            <Stats/>
            <Video/>
            <EsiesCantrol/>
        </div>
      </div>
    </div>
  )
}
