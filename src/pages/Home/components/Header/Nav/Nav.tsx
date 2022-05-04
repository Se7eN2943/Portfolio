import { FC } from 'react'

import s from './Nav.module.scss'

const Nav: FC = () => {
  return (
    <nav className={s.wrapper}>
      <ul className={s.list}>
        <li className={`${s.listItem} ${s.listItem_active}`}>На главную</li>
        <li className={`${s.listItem}`}>Обо мне</li>
        <li className={`${s.listItem}`}>Примеры работ</li>
        <li className={`${s.listItem}`}>Контакты</li>
      </ul>
    </nav>
  )
}

export default Nav
