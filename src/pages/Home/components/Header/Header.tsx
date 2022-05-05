import { FC, useState } from 'react'
import { Modal } from 'antd';

import s from './Header.module.scss'
import Nav from './Nav/Nav'

import HeaderImg from '../../../../assets/img/headerImg.png'

const Header: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <header id="header" className={s.header}>
        <Modal footer={[]} title="Контакты" visible={isModalVisible} onCancel={() => setIsModalVisible(false)}>
          <p>Телефон: <a href="tel:8-999-798-48-47">8-999-798-48-47</a></p>
          <p>Email: <a href="mailto:flip2943@gmail.com">flip2943@gmail.com</a> / <a href="mailto:todorovvk2943@gmail.com">todorovvk2943@gmail.com</a></p>
          <p>HeadHunter: <a href="https://hh.ru/applicant/resumes/view?resume=0b2e71feff07eb2d860039ed1f495541303845">https://hh.ru/applicant/resumes/view?resume=0b2e71feff07eb2d860039ed1f495541303845</a> </p>
          <p>GitHub: <a href="https://github.com/Se7eN2943">https://github.com/Se7eN2943</a></p>
        </Modal>
        <div className={s.header_content}>
          <Nav />
          <div className={s.header_aboutUs}>
            <div className={s.header_aboutUs__inform}>
              <span>привет</span>
              <h1>Меня зовут влад тодоров</h1>
              <p>и я начинающий Front-end разработчик</p>
              <button onClick={() => setIsModalVisible(true)} className={s.header_aboutUs__btn}>Связаться со мной</button>
            </div>
            <div className={s.header_aboutUs__img}>
              <img src={HeaderImg} alt="header IMG" />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
