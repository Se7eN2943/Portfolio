import { FC } from 'react'

import Skills from './Skills/Skills'
import AboutMe from './AboutMe/AboutMe'
import s from './Main.module.scss'

const Main: FC = () => {
  return (
    <main className={s.homeMain}>
      <div className={s.homeMain_content}>
        <Skills />
        <AboutMe />
      </div>
    </main>
  )
}

export default Main
