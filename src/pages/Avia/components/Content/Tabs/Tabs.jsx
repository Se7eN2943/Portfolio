import { useSelector, useDispatch } from 'react-redux'

import { SORT } from '../../../../../redux/reducers/aviaSalesReducer'

const Tabs = () => {
  const dispatch = useDispatch()
  const { sortFlag } = useSelector((state) => state.aviaSalesReducer)
  const buttonsName = [
    { name: 'discount', tittle: 'самый дешевый' },
    { name: 'fast', tittle: 'самый быстрый' },
    { name: 'optimal', tittle: 'оптимальный' }
  ]

  const TabsButton = ({ name, tittle, classPos }) => {
    return (
      <button
        name={name}
        onClick={() => dispatch(SORT(name))}
        className={`${classPos} navBtn  weight600 ${
          sortFlag === name ? 'active' : null
        }`}
      >
        {tittle}
      </button>
    )
  }

  const TabsButtons = () => {
    const elements = buttonsName.map((name, i) => (
      <TabsButton
        classPos={
          i === 0
            ? 'navBtn_start'
            : i === buttonsName.length - 1
            ? 'navBtn_end'
            : null
        }
        tittle={name.tittle}
        name={name.name}
        key={i}
      />
    ))
    return <section className="tabs">{elements}</section>
  }

  return <TabsButtons />
}

export default Tabs
