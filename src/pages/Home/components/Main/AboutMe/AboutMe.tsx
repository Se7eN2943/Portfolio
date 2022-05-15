import { FC } from 'react'

import Photo1 from '../../../../../assets/img/AboutMiPhoto1.jpg'
import Photo2 from '../../../../../assets/img/AboutMiPhoto2.jpg'
import Photo3 from '../../../../../assets/img/AboutMiPhoto3.jpg'

import s from './AboutMe.module.scss'

const AboutMe: FC = () => {
  return (
    <div id="aboutMe" className={s.aboutMe_wrapper}>
      <div className={s.main_aboutMe}>
        <div className={s.main_aboutMe__statrtImg}>
          <div className={s.main_aboutMe__img}>
            <img src={Photo1} alt="" />
          </div>
          <div className={s.main_aboutMe__img}>
            <img src={Photo2} alt="" />
          </div>
        </div>
        <div className={s.main_aboutMe__text}>
          <h4>Обо мне</h4>
          <p>
            Я начинающий front-end разработчик. Имею навыки разработки на React
            JS/TS (как с помощью классовых компонентов, так и функциональных).
            Так же владею HTML5, CSS3, JavaScript, TypeScript, менеджером
            состояний Redux и его фреймворком Redux Tool Kit. Так же имею опыт
            применения библиотеки компонентов Ant Design, средством валидации
            форм React Hook Form и др. Имею опыт работы в команде с другими
            разработчиками, как front-end так и back-end. Так же у меня есть
            опыт чтения чужого кода и его рефакторинга. Создавал страницы
            личного кабинет для проекта TeamUp (приложение для поиска и
            размещения мероприятий, на данный момент находится в разработке), а
            так же дорабатывал и рефакторил другие страницы и компоненты этого
            приложения. Передавал знания и описывал текущее состояние проекта
            новым разработчикам. Примеры моих работ можно посмотреть ниже. Так
            как я начинающий разработчик, у меня нет коммерческого опыта
            разработки. Хочу развиваться, и закреплять опытом свои знания и
            умения в разработке. В будущем хочу развиться до full-stack
            разработчика.
          </p>
        </div>
        <div className={s.main_aboutMe__endImg}>
          <div className={s.main_aboutMe__img}>
            <img src={Photo3} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
