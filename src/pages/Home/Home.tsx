import { FC } from 'react'

import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Portfolio from './components/Portfolio/Portfolio'
import Footer from './components/Footer/Footer'
import './Home.scss'

const Home: FC = () => {
  return (
    <div className="home">
      <Header />
      <Main />
      <Portfolio />
      <Footer />
    </div>
  )
}

export default Home
