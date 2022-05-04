import { FC } from 'react'

import headerStyle from './Header.module.scss'
import Nav from './Nav/Nav'

import HeaderImg from '../../../../assets/img/headerImg.png'

const Header: FC = () => {

  return (
    <header className={headerStyle.header}>
      <Nav />
      <div className="header_aboutAs">
        <div className="header_aboutAs__inform">
          <span>привет</span>
          <h1>Меня зовут влад тодоров</h1>
          <p>и я начинающий Front-end разработчик</p>
          <button className="header_aboutUs__btn"></button>
        </div>

        <div className="header_aboutUs__img">
          <img src={HeaderImg} alt="header IMG" />
        </div>
      </div>
    </header>
  )
}

export default Header
