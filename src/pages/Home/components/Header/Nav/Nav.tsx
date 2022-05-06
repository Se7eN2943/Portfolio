import { FC, useState } from 'react'

import s from './Nav.module.scss'

const Nav: FC = () => {
  const [activeBtn, setActiveBtn] = useState('home')
  return (
    <nav className={s.homeNav}>
      <ul className={s.homeNav_list}>
        <a
          className={`${s.homeNav_listItem} ${
            activeBtn === 'home' ? s.homeNav_listItem__active : null
          }`}
          onClick={() => setActiveBtn('home')}
          href="#header"
        >
          <li>На главную</li>
        </a>
        <a
          href="#aboutMe"
          className={`${s.homeNav_listItem} ${
            activeBtn === 'me' ? s.homeNav_listItem__active : null
          }`}
          onClick={() => setActiveBtn('me')}
        >
          <li>Обо мне</li>
        </a>
        <a
          href="#portfolio"
          className={`${s.homeNav_listItem} ${
            activeBtn === 'works' ? s.homeNav_listItem__active : null
          }`}
          onClick={() => setActiveBtn('works')}
        >
          <li>Примеры работ</li>
        </a>
        <a
          href="#footer"
          className={`${s.homeNav_listItem} ${
            activeBtn === 'call' ? s.homeNav_listItem__active : null
          }`}
          onClick={() => setActiveBtn('call')}
        >
          <li>Контакты</li>
        </a>
      </ul>
    </nav>
  )
}

export default Nav
