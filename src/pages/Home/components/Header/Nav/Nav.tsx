import { FC, useState } from 'react'

import s from './Nav.module.scss'
console.log(window.visualViewport)
const Nav: FC = () => {
  const [activeBtn, setActiveBtn] = useState('home');
  return (
    <nav className={s.nav}>
      <ul className={s.nav_list}>
        <a
          className={`${s.nav_listItem} ${activeBtn === 'home' ? s.nav_listItem__active : null}`}
          onClick={() => setActiveBtn('home')}
          href="#header"
        >
          <li>
            На главную
          </li>
        </a>
        <a
          href="#aboutMe"
          className={`${s.nav_listItem} ${activeBtn === 'me' ? s.nav_listItem__active : null}`}
          onClick={() => setActiveBtn('me')}
        >
          <li>
            Обо мне
          </li>
        </a>
        <a
          href="#portfolio"
          className={`${s.nav_listItem} ${activeBtn === 'works' ? s.nav_listItem__active : null}`}
          onClick={() => setActiveBtn('works')}
        >
          <li>
            Примеры работ
          </li>
        </a>
        <a
          href="#footer"
          className={`${s.nav_listItem} ${activeBtn === 'call' ? s.nav_listItem__active : null}`}
          onClick={() => setActiveBtn('call')}
        >
          <li>
            Контакты
          </li>
        </a>
      </ul>
    </nav >
  )
}

export default Nav
