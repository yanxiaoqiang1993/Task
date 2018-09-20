import {
    searchEditeListSuccess,
    addRoomSuccess,
    showEditeRoomOK,
    hideEditeRoomOK,
    deleteRoomSuccess,
    editeRoomSuccess
} from '../actions/edite'
import initialState from './initialState'

export default function edite(state = initialState.edite, action = {}) {
    switch (action.type) {
        case "searchEditeListSuccess":
            return Object.assign({}, state, {
                listData: state.listData
            });
        case "addRoomSuccess":
            return Object.assign({}, state, {listData: action.payload})
        case "showEditeRoomOK":
            return Object.assign({}, state, {
                showEditeRoom: true,
                updateRoomItem: action.payload
            })
        case "hideEditeRoomOK":
            return Object.assign({}, state, {showEditeRoom: false, updateRoomItem: {}});
        case "deleteRoomSuccess":
            return Object.assign({}, state, {
                showEditeRoom: false,
                updateRoomItem: {},
                listData: action.payload
            })
        case "editeRoomSuccess":
            return Object.assign({}, state, {
                showEditeRoom: false,
                updateRoomItem: {},
                listData: action.payload
            })
        default:
            return state;
    }
}