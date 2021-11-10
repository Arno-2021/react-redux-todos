import {
    CHECK_ITEM,
    DEL_ITEM,
    ADD_ITEM,
    CHECK_ALL,
    EDIT_ITEM,
    CLEAR_COMPLETED,
} from '../constants/todos'
const init = JSON.parse(localStorage.getItem('list')) || []
const todosReducer = (state = init, action) => {
    if (action.type === CHECK_ITEM) {
        return state.map(item => {
            if (item.id === action.id) {
                return {
                    ...item,
                    done: !item.done,
                }
            } else {
                return item
            }
        })
    }
    if (action.type === DEL_ITEM) {
        return state.filter(item => item.id !== action.id)
    }
    if (action.type === ADD_ITEM) {
        const obj = {
            id: Date.now(),
            msg: action.msg,
            done: false,
        }
        return [obj, ...state]
    }
    if (action.type === CHECK_ALL) {
        return state.map(item => ({
            ...item,
            done: !action.done,
        }))
    }
    if (action.type === EDIT_ITEM) {
        return state.map(item => {
            if (item.id === action.id) {
                return {
                    ...item,
                    msg: action.msg,
                }
            } else {
                return item
            }
        })
    }
    if (action.type === CLEAR_COMPLETED) {
        return state.filter(item => !item.done)
    }
    return state
}
export default todosReducer
