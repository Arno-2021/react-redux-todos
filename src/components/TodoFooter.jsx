import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { switchTab } from '../store/actions/switchBar'
import { clearCompleted } from '../store/actions/todos'

export default function TodoFooter() {
    const list = useSelector(state => state.todos)
    const selected = useSelector(state => state.bar)
    const itemLeft = list.filter(item => !item.done).length
    const tabs = ['All', 'Active', 'Completed']
    const dispatch = useDispatch()
    return (
        <footer className='footer'>
            <span className='todo-count'>
                <strong>{itemLeft}</strong> item left
            </span>
            <ul className='filters'>
                {tabs.map(item => (
                    <li
                        key={item}
                        onClick={() => {
                            dispatch(switchTab(item))
                        }}
                    >
                        <a
                            className={item === selected ? 'selected' : ''}
                            href='#/'
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
            <button
                className='clear-completed'
                onClick={() => dispatch(clearCompleted())}
            >
                Clear completed
            </button>
        </footer>
    )
}
