export interface AviaSalesState {
  searchId: string,
  tickets: any,  //потом типизировать правильно
  ticketsFlag: boolean,
  filterList: any,   //потом типизировать правильно
  sortFlag: any,   //потом типизировать правильно
  sliced: number,
}

export interface BlogState {
  articles: any, //потом типизировать правильно
  articlesCount: number,
  article?: any, //потом типизировать правильно
  auth: boolean | string, 
  username: string,
  image: string,
  token: string,
  email: string,
}


















interface Dto { }




export interface InterestDto extends Dto {
  // Название
  title: string

  // Краткое описание
  shortDescription: string
}

export interface InterestDtoApi {
  interestsDtoList: InterestDto
}

export interface UserDto extends Dto {
  // Username
  username: string
  //было name, для стандартизации с сервером сделал username. если в итоге что-то сломается вернуть обратно

  // Имя
  firstName: string

  // Фамилия
  lastName: string

  // Отчество
  middleName: string

  // Почта
  email: string

  // Город проживания
  city: string

  // Доп.Инфо
  aboutUser: string

  // Интересы, заполняется не всегда
  userInterests?: InterestDto[]

  //Возраст
  age?: number

  //Роль пользователя
  role?: string

  //Фото
  photo?: string
}

export interface EventTypeDto extends Dto {
  // Название
  type: string
}

export interface EventReviewDto extends Dto {
  // Кто оставил отзыв
  reviewer: UserDto

  // сообщение
  message: string

  // Для какого мероприятия
  eventId: number

  // Время
  time: string

  // оценка
  EventGrade: number
}

export interface EventDto extends Dto {
  // Название
  eventName: string
  // Краткое описание
  descriptionEvent: string
  // Место провидения
  placeEvent: string
  // Город
  city: string
  // Время проведения
  timeEvent: number[]
  // Приватность
  eventPrivacy: boolean
  // Кол-во участников
  eventNumberOfParticipant: number
  // Тип мероприятия
  eventType: EventTypeDto
  // Id автора
  authorId: number
  // Интересы
  eventInterests: InterestDto[]
  // Status	StatusDto	Статус мероприятия. Строка-временный тип данных
  status: string
  // Минимальный возраст
  minYear: number
}

export interface UserDtoRedux {
  //Токен
  token: string
  //Данные юсера
  userDto: UserDto
}

export interface servicesReducer {
  //Флаг переключения локальный API/сетевой API
  apiFlagLocal: boolean
  userAuth: boolean
}

export interface LoginUserModel {
  email: string
  password: string
  rememberMe?: boolean
}

export interface SignUpFields {
  email: string
  password: string
  username: string
  firstname: string

  lastname: string
  aboutUser: string
  city: string
  age: string
}

export interface CardProps {
  name: string
  surname: string
  desc: string
  age: number
  photo?: string
}
export interface BoxGeometry {
  width: number
  height: number
}

export interface LoopItemProps extends BoxGeometry {
  left: number
}


export type SliderStartGuard = 'start' | 'middle' | 'end'



export interface City {
  id: number
  name: string
  subject: string
  lat: string
  lot: string
}
