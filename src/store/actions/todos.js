import {
    ADD_ITEM,
    CHECK_ITEM,
    DEL_ITEM,
    CHECK_ALL,
    EDIT_ITEM,
    CLEAR_COMPLETED,
} from '../constants/todos'

export const checkItem = id => ({
    type: CHECK_ITEM,
    id,
})
export const delItem = id => ({
    type: DEL_ITEM,
    id,
})
export const addItem = msg => ({
    type: ADD_ITEM,
    msg,
})
export const checkAll = done => ({
    type: CHECK_ALL,
    done,
})
export const editItem = (id, msg) => ({ type: EDIT_ITEM, id, msg })
export const clearCompleted = () => ({
    type: CLEAR_COMPLETED,
})
