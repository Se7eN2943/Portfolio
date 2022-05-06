import React from 'react';
import { connect } from 'react-redux'
import { setSortFlag } from '../../../redux/actions'

const Tabs = ({ sortFlag, setSortFlag }) => {

    const buttonsName = [{ name: 'discount', tittle: 'самый дешевый' }, { name: 'fast', tittle: 'самый быстрый' }, { name: 'optimal', tittle: 'оптимальный' }]

    const TabsButton = ({ name, tittle, classPos }) => {
        return (
            <button
                name={name}
                onClick={() => setSortFlag(name)}
                className={`${classPos} navBtn  weight600 ${sortFlag === name ? 'active' : null}`}>
                {tittle}
            </button>
        )
    }

    const TabsButtons = () => {
        const elements = buttonsName.map((name, i) =>
            <TabsButton
                classPos={i === 0 ? 'navBtn_start' : i === buttonsName.length - 1 ? 'navBtn_end' : null}
                tittle={name.tittle}
                name={name.name} key={i} />)
        return (
            <section>
                {elements}
            </section>
        )
    }

    return <TabsButtons />
}

const mapStateToProps = state => ({ sortFlag: state.sortFlag })

export default connect(mapStateToProps, { setSortFlag })(Tabs)
