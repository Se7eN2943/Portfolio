import { Component } from 'react'
import PropTypes from 'prop-types'

import TasksFilter from '../TasksFilter/TasksFilter'

export default class Footer extends Component {
  static defaultProps = {
    dataLength: 1,
    todoFilter: () => {},
    clearComplite: () => {}
  }

  static propTypes = {
    dataLength: PropTypes.number,
    todoFilter: PropTypes.func,
    clearComplite: PropTypes.func
  }

  render() {
    const { dataLength, clearComplite, todoFilter, togleClass } = this.props
    return (
      <footer className="footer">
        <span className="todo-count">{dataLength} items left</span>
        <TasksFilter todoFilter={todoFilter} togleClass={togleClass} />
        <button
          type="button"
          onClick={() => clearComplite()}
          className="clear-completed"
        >
          Clear completed
        </button>
      </footer>
    )
  }
}
