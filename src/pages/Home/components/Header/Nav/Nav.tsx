import { FC, useState } from 'react'

import s from './Nav.module.scss'

const Nav: FC = () => {
  const [activeBtn, setActiveBtn] = useState('home');
  return (
    <nav className={s.nav}>
      <ul className={s.nav_list}>
        <a href="#header">
          <li
            className={`${s.nav_listItem} ${activeBtn === 'home' ? s.nav_listItem__active : null}`}
            onClick={() => setActiveBtn('home')}
          >
            На главную
          </li>
        </a>
        <a href="#aboutMe">
          <li
            className={`${s.nav_listItem} ${activeBtn === 'me' ? s.nav_listItem__active : null}`}
            onClick={() => setActiveBtn('me')}
          >
            Обо мне
          </li>
        </a>
        <a href="#portfolio">
          <li
            className={`${s.nav_listItem} ${activeBtn === 'works' ? s.nav_listItem__active : null}`}
            onClick={() => setActiveBtn('works')}
          >
            Примеры работ
          </li>
        </a>
        <a href="#footer">
          <li
            className={`${s.nav_listItem} ${activeBtn === 'call' ? s.nav_listItem__active : null}`}
            onClick={() => setActiveBtn('call')}
          >
            Контакты
          </li>
        </a>
      </ul>
    </nav >
  )
}

export default Nav
