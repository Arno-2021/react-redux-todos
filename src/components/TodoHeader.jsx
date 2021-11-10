import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../store/actions/todos'

export default function TodoHeader() {
    const [content, setContent] = useState('')
    const dispatch = useDispatch()
    const submit = e => {
        if (e.code === 'Enter') {
            if (!content.trim()) return
            dispatch(addItem(content))
            setContent('')
        }
    }
    return (
        <header className='header'>
            <h1>todos</h1>
            <input
                className='new-todo'
                placeholder='What needs to be done?'
                autoFocus
                value={content}
                onChange={e => setContent(e.target.value)}
                onKeyUp={submit}
            />
        </header>
    )
}
