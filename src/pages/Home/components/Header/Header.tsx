import { FC } from 'react'

import s from './Header.module.scss'
import Nav from './Nav/Nav'

import HeaderImg from '../../../../assets/img/headerImg.png'

const Header: FC = () => {

  return (
    <header id="header" className={s.header}>
      <div className={s.header_content}>
        <Nav />
        <div className={s.header_aboutUs}>
          <div className={s.header_aboutUs__inform}>
            <span>привет</span>
            <h1>Меня зовут влад тодоров</h1>
            <p>и я начинающий Front-end разработчик</p>
            <button className={s.header_aboutUs__btn}>Связаться со мной</button>
          </div>

          <div className={s.header_aboutUs__img}>
            <img src={HeaderImg} alt="header IMG" />
          </div>
        </div>

      </div>

    </header>
  )
}

export default Header
