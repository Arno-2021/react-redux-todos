import TodoItem from './TodoItem'
import { useSelector, useDispatch } from 'react-redux'
import { checkAll } from '../store/actions/todos'
import { useEffect } from 'react'
export default function TodoMain() {
    const dispatch = useDispatch()
    const selected = useSelector(state => state.bar)
    const list = useSelector(state => {
        if (selected === 'Active') {
            return state.todos.filter(item => !item.done)
        } else if (selected === 'Completed') {
            return state.todos.filter(item => item.done)
        } else {
            return state.todos
        }
    })
    const originList = useSelector(state => state.todos)
    const checkedAll = useSelector(state =>
        state.todos.every(item => item.done)
    )
    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(originList))
    }, [originList])
    return (
        <section className='main'>
            <input
                id='toggle-all'
                className='toggle-all'
                type='checkbox'
                checked={checkedAll}
                onChange={() => dispatch(checkAll(checkedAll))}
            />
            <label htmlFor='toggle-all'>Mark all as complete</label>
            {list.map(item => (
                <TodoItem key={item.id} item={item}></TodoItem>
            ))}
        </section>
    )
}
