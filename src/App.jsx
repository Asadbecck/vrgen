import styles from './style'
import { Header, Navbar, Stats, Video, Business, EsiesCantrol, About, Footer, ItemsFooter } from './components'

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
            <Video/>
            <Stats/>
            <br />
            <Business />
            <br />
            <EsiesCantrol/>
            <br />
            <About/>
            <br />
            <Footer/>
            <br />
            <ItemsFooter/>

        </div>
      </div>
    </div>
  )
}
