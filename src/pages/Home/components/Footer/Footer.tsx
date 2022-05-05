import { FC } from 'react'

import s from './Footer.module.scss'
import btn from '../../../../assets/img/beck_btn.png'

const Footer: FC = () => {

  return (
    <footer id='footer' className={s.footer}>
      <div className={s.footer_contacts}>
        <span>Контакты:</span>
        <div className={s.email}>
          <span>Email: flip2943@gmail.com</span>
        </div>
        <div className={s.tel}>
          <span>Телефон: 8-999-798-48-47</span>
        </div>
      </div>
      <div className="copirate">
        Copyright © 2022  Владислав Тодоров
      </div>
    </footer>
  )
}

export default Footer
