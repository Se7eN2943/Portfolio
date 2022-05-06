import React from 'react';
import TicketList from './TicketList/TicketList'
import Tabs from './Tabs/Tabs'

const Content = () => {
    return (
        <section className="content">
            <Tabs />
            <TicketList />
        </section>
    )
}

export default Content 