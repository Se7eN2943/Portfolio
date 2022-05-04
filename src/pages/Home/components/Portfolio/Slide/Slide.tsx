import { FC } from 'react'


const Slide: FC = (props) => {

  return (
    <div className="portfolio_slider__slide">
      <div className="portfolio_slider__slide___img">
        <img src="" alt="" />
      </div>
      <div className="portfolio_slider__slide___text">
        <h6>Название</h6>
        <p>Идейные соображения высшего порядка, а также понимание сущности ресурсосберегающих технологий создаёт предпосылки качественно новых шагов для системы обучения
          кадров, соответствующей насущным потребностям. Идейные соображения высшего порядка, а также сложившаяся структура организации требует анализа существующий
          финансовых и административных условий.
        </p>
        <span>Перейти</span>
      </div>
    </div>
  )
}

export default Slide
