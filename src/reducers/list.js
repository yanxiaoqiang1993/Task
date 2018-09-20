import {
    searchListSuccess
} from '../actions/list'
import initialState from './initialState'

export default function list(state = initialState.list, action = {}) {
    switch (action.type) {
        case 'searchListSuccess':
            return Object.assign({}, state, {
                listData: state.listData
            })
        default:
            return state
    }
}