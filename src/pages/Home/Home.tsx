import { FC } from 'react'

import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Portfolio from './components/Portfolio/Portfolio'
import Footer from './components/Footer/Footer'

const Home: FC = () => {

  return (
    <>
      <Header />
      <Main />
      <Portfolio />
      <Footer />
    </>
  )
}

export default Home
