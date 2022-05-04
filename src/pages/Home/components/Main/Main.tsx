import { FC } from 'react'

import Skills from './Skills/Skills'
import AboutMe from './AboutMe/AboutMe'

import s from './Main.module.scss'


const Main: FC = () => {

  return (
    <main className={s.main}>
      <div className={s.main_content}>
        <Skills />
        <AboutMe />
      </div>
    </main>
  )
}

export default Main
