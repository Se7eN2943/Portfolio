import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import Slide from './Slide/Slide'

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import s from './Portfolio.module.scss'

import todo from '../../../../assets/img/SliderPrevs/todo.png'
import cinema from '../../../../assets/img/SliderPrevs/cinima.png'
import avia from '../../../../assets/img/SliderPrevs/avia.png'
import blog from '../../../../assets/img/SliderPrevs/blog.png'


const todoText = 'Полностью функцианальное приложение ToDo. Можно добавлять/удалять задачи, создавать таймер обратного отсчета для отслеживания времени выполнения.'
const cinemaText = 'Приложение для поиска и оценки фильмов. Функцианальный поиск, есть возможность оценки фильмов по 10-и бальному рэйтингу. Оцененне фильмы попадают во вкладку "понравившееся". К сожелению полный функцианал приложения доступен только с включенным VPN, так как в нем используется реальный API рессурса, который на данный момент заблокирован на территории РФ.'
const aviaText = 'Тестовое задание для Front-end разработчиков на React в компани AviaSales. С сервера поступают пакеты с билетами (около 10000 шт.). Сортировка и фильтрация функциональны.'
const blogText = 'Функцианальная Блог платформа. Есть возможность регистрации/авторизации, создание/редактирование статей (статьи создаются в Marckdown), редактирование профиля, оценка статей других людей. Приложение работает с реальным API.'



const Portfolio: FC = () => {
  return (
    <div id='portfolio' className={s.portfolio}>
      <h5>Примеры моих работ</h5>
      <div className={s.portfolio_slider}>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={100}
          onSlideChange={(e) => console.log(e)}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide><Slide img={todo} text={todoText} head='ToDo App' link='/ToDoApp' /></SwiperSlide>
          <SwiperSlide><Slide img={cinema} text={cinemaText} head='Search Cinema' link='/ToDoApp' /></SwiperSlide>
          <SwiperSlide><Slide img={avia} text={aviaText} head='Avia Sales' link='/ToDoApp' /></SwiperSlide>
          <SwiperSlide><Slide img={blog} text={blogText} head='Realworld Blog' link='/ToDoApp' /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Portfolio
