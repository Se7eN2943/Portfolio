import { FC } from 'react'

import s from './Nav.module.scss'

const Nav: FC = () => {
  onClick = () => {
    
  }
  return (
    <nav className={s.nav}>
      <ul className={s.nav_list}>
        <a href="#header"><li className={`${s.nav_listItem} ${s.nav_listItem__active}`}>На главную</li></a>
        <a href="#aboutMe"><li className={`${s.nav_listItem}`}>Обо мне</li></a>
        <a href="#portfolio"><li className={`${s.nav_listItem}`}>Примеры работ</li></a>
        <a href="#footer"><li className={`${s.nav_listItem}`}>Контакты</li></a>
      </ul>
    </nav>
  )
}

export default Nav
