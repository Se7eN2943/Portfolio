import { FC, useState } from 'react'
import { Modal } from 'antd';

import s from './Header.module.scss'
import Nav from './Nav/Nav'

import HeaderImg from '../../../../assets/img/headerImg.png'

const Header = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <header id="header" className={s.header}>
        <Modal footer={[]} title="Контакты" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <p>Телефон: <a href="tel:8-999-798-48-47">8-999-798-48-47</a></p>
          <p>Email: <a href="mailto:flip2943@gmail.com">flip2943@gmail.com</a></p>
          <p>Ссылка на HH</p>
        </Modal>
        <div className={s.header_content}>
          <Nav />
          <div className={s.header_aboutUs}>
            <div className={s.header_aboutUs__inform}>
              <span>привет</span>
              <h1>Меня зовут влад тодоров</h1>
              <p>и я начинающий Front-end разработчик</p>
              <button onClick={showModal} className={s.header_aboutUs__btn}>Связаться со мной</button>
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
