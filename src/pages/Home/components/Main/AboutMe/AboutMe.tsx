import { FC } from 'react'

import Photo1 from '../../../../../assets/img/AboutMiPhoto1.jpg'
import Photo2 from '../../../../../assets/img/AboutMiPhoto2.jpg'

const AboutMe: FC = () => {

  return (
    <div className="main_aboutMi">
      <div className="main_aboutMi__statrtImg">
        <img className="main_aboutMi__img" src={Photo1} alt="" />
        <img className="main_aboutMi__img" src={Photo2} alt="" />
      </div>
      <div className="main_aboutMi__text">
        <h4>Обо мне</h4>
        <p>Разнообразный и богатый опыт рамки и место обучения кадров обеспечивает широкому кругу специалистов системы массового участия.
          Не следует, однако, забывать, что начало повседневной работы по формированию позиции требует от нас анализа новых принципов
          формирования материально-технической и кадровой базы.
        </p>
        <div className="main_aboutMi__endImg">
          <img className="main_aboutMi__img" src="" alt="" />
        </div>
      </div>
    </div>
  )
}

export default AboutMe
