import React from 'react';
import { connect } from 'react-redux'
import { setSlice } from '../../../redux/actions'
import Ticket from './Ticket/Ticket';
import { Alert } from 'antd';

const TicketList = ({ tickets, filterList, sortFlag, sliced, setSlice }) => {

    let filteredTickets = filterList.length === 4 && tickets || []

    const filter = stop => {
        filteredTickets = filteredTickets.concat(tickets.filter(
            ticket => ticket.segments[0].stops.length === stop
                && ticket.segments[1].stops.length === stop
        ))
    }

    filterList.some(filter => filter === 'Без пересадок') && filter(0)

    filterList.some(filter => filter === '1 пересадка') && filter(1)

    filterList.some(filter => filter === '2 пересадки') && filter(2)

    filterList.some(filter => filter === '3 пересадки') && filter(3)

    const sorted = () => {

        switch (sortFlag) {
            case 'fast':
                return filteredTickets.sort((prev, next) => {
                    if (prev.segments[0].duration > next.segments[0].duration && prev.segments[1].duration > next.segments[1].duration) return 1
                    if (prev.segments[0].duration < next.segments[0].duration && prev.segments[1].duration < next.segments[1].duration) return -1
                    return 0;
                })
            case 'optimal':
                const discount = filteredTickets.sort((prev, next) => prev.price - next.price)
                return discount.sort((prev, next) => {
                    if (prev.segments[0].duration > next.segments[0].duration && prev.segments[1].duration > next.segments[1].duration) return 1
                    if (prev.segments[0].duration < next.segments[0].duration && prev.segments[1].duration < next.segments[1].duration) return -1
                    return 0;
                })
            default:
                return filteredTickets.sort((prev, next) => prev.price - next.price)
        }
    };

    const elements = sorted().map((ticket, i) => {
        return <Ticket
            price={ticket.price}
            carrier={ticket.carrier}
            segments={ticket.segments}
            key={i}
        />
    })

    return (
        <>
            {elements.length === 0
                ? <Alert
                    message="Ничего не найдено"
                    description="Попробуйте изменить фильтры или обновите страницу"
                    type="info"
                    showIcon
                />
                :
                <>
                    <div className="tickets">
                        {elements.slice(0, sliced)}
                    </div>
                    <button onClick={() => setSlice(sliced + 5)} className="allTicketsBtn active">
                        Показать еще 5 билетов!
                    </button>
                </>
            }
        </>
    )
}

const mapStateToProps = state => {
    return {
        tickets: state.tickets,
        filterList: state.filterList,
        sortFlag: state.sortFlag,
        sliced: state.sliced,
    }
}

export default connect(mapStateToProps, { setSlice })(TicketList)
