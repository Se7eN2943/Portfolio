import React, { useEffect } from 'react';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux'
import { Progress } from 'antd';
import Filters from './components/Filters/Filters'
import Content from './components/Content/Content'
import logo from './avia.png';
import AviaSales from './services';
import { setSearchId, setTickets, setTicketsFlag } from './redux/actions';
import reducer from './redux/reducer';

import 'animate.css';
import 'antd/dist/antd.css';
import './AviaSales.scss';
import './components/Filters/Filters.scss';
import './components/Content/Tabs/Tabs.scss';
import './components/Content/TicketList/TicketList.scss';
import './components/Content/TicketList/Ticket/Ticket.scss';
import './components/Content/TicketList/Ticket/Route/Route.scss';
import './components/Content/Content.scss';

const aviaSales = new AviaSales();

const store = createStore(reducer);

const Logo = () => <div className="headerLogo"><img src={logo} alt="aviaLogo" /></div>

const AviaSalesApp = ({ setSearchId, setTickets, searchId, ticketsFlag, setTicketsFlag, tickets }) => {

    const getSerch = () => aviaSales.getSearchId().then(id => setSearchId(id))

    const getTickets = () => aviaSales.getTickets(searchId).then(ticket => {
        if (!ticket) return getTickets()
        setTickets(ticket)
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
        <Provider store={store}>
            <header><Logo /></header>
            {!ticketsFlag && <Progress
                strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                }}
                percent={tickets.length / 100}
                showInfo={false}
            />}
            <main>
                <Filters />
                <Content />
            </main>
        </Provider>
    )
}

const mapStateToProps = state => {
    return {
        searchId: state.searchId,
        tickets: state.tickets,
        ticketsFlag: state.ticketsFlag
    }
}

export default connect(mapStateToProps, { setSearchId, setTickets, setTicketsFlag })(AviaSalesApp)




