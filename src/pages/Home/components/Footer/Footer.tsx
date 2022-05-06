import { FC } from 'react'

import btn from '../../../../assets/img/beck_btn.png'

import s from './Footer.module.scss'

const Footer: FC = () => {
  return (
    <footer id="footer" className={s.homeFooter}>
      <div className={s.homeFooter_contacts}>
        <span>Контакты:</span>
        <div className={s.email}>
          <span>Email: flip2943@gmail.com</span>
        </div>
        <div className={s.tel}>
          <span>Телефон: 8-999-798-48-47</span>
        </div>
      </div>
      <div className="copirate">Copyright © 2022 Владислав Тодоров</div>
    </footer>
  )
}

export default Footer
