import React, { useEffect, useRef, useState } from 'react'
import classnames from 'classnames'
import { useDispatch } from 'react-redux'
import { checkItem, delItem, editItem } from '../store/actions/todos'
export default function TodoItem({ item }) {
    const dispatch = useDispatch()
    const [currentId, setCurrentId] = useState('')
    const [currentMsg, setCurrentMsg] = useState('')
    const ref = useRef(null)
    useEffect(() => {
        ref.current.focus()
    }, [currentId])
    return (
        <ul className='todo-list'>
            <li
                className={classnames({
                    completed: item.done,
                    editing: item.id === currentId,
                })}
            >
                <div className='view'>
                    <input
                        className='toggle'
                        type='checkbox'
                        checked={item.done}
                        onChange={() => dispatch(checkItem(item.id))}
                    />

                    <label
                        onDoubleClick={() => {
                            setCurrentId(item.id)
                            setCurrentMsg(item.msg)
                        }}
                    >
                        {item.msg}
                    </label>
                    <button
                        className='destroy'
                        onClick={() => dispatch(delItem(item.id))}
                    ></button>
                </div>
                <input
                    ref={ref}
                    className='edit'
                    value={currentMsg}
                    onBlur={() => setCurrentId('')}
                    onChange={e => setCurrentMsg(e.target.value)}
                    onKeyUp={e => {
                        if (e.code === 'Enter') {
                            setCurrentId('')
                            dispatch(editItem(item.id, currentMsg))
                        }
                        if (e.code === 'Escape') {
                            setCurrentId('')
                        }
                    }}
                />
            </li>
        </ul>
    )
}
