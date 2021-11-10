import { SWITCH_TAB } from '../constants/switchBar'

const barReducer = (state = 'All', action) => {
    switch (action.type) {
        case SWITCH_TAB:
            return action.tab

        default:
            return state
    }
}
export default barReducer
