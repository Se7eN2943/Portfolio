import { useEffect } from 'react'
import { Progress } from 'antd'
import { useSelector, useDispatch } from 'react-redux'

import { SEARCH_ID, TICKETS } from '../../redux/reducers/aviaSalesReducer'

import Filters from './components/Filters/Filters'
import Content from './components/Content/Content'
import logo from '../../assets/img/aviaLogo.png'
import AviaSales from '../../services/AviaSales/services'

import './AviaSales.scss'
import './components/Filters/Filters.scss'
import './components/Content/Tabs/Tabs.scss'
import './components/Content/TicketList/TicketList.scss'
import './components/Content/TicketList/Ticket/Route/Route.scss'
import './components/Content/Content.scss'

const aviaSales = new AviaSales()

const Logo = () => (
  <div className="headerLogo">
    <img src={logo} alt="aviaLogo" />
  </div>
)

const AviaSalesApp = () => {
  const dispatch = useDispatch()
  const { searchId, ticketsFlag, tickets } = useSelector(
    (state) => state.aviaSalesReducer
  )

  const getSerch = () =>
    aviaSales.getSearchId().then((id) => dispatch(SEARCH_ID(id)))

  const getTickets = () =>
    aviaSales.getTickets(searchId).then((ticket) => {
      console.log(ticket)
      if (!ticket) return getTickets()
      dispatch(TICKETS(ticket))
      if (!ticket.stop) return getTickets()
      return
    })

  useEffect(async () => {
    await getSerch()
  }, [])

  useEffect(() => {
    if (searchId.length > 1) getTickets()
  }, [searchId])

  return (
    <div className="avia">
      <header>
        <Logo />
      </header>
      {!ticketsFlag && (
        <Progress
          strokeColor={{
            '0%': '#108ee9',
            '100%': '#87d068'
          }}
          percent={tickets.length / 100}
          showInfo={false}
        />
      )}
      <main>
        <Filters />
        <Content />
      </main>
    </div>
  )
}

export default AviaSalesApp
