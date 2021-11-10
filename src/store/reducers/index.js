import { combineReducers } from 'redux'
import todos from './todos'
import bar from './switchBar'
const rootReducer = combineReducers({
    todos,
    bar,
})
export default rootReducer
