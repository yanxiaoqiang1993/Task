export const searchEditeListSuccess = "searchEditeListSuccess";
export const searchEditeList = () => {
    return dispatch => {
        dispatch({type: "searchEditeListSuccess", payload: {}})
    }
}

export const addRoomSuccess = 'addRoomSuccess'
export const addRoom = (data, tabIndex) => {
    return (dispatch, getState) => {
        let listData = [].concat(getState().edite.listData);
        data.key = ran();
        listData[tabIndex].rooms.push(data);
        dispatch({type: "addRoomSuccess", payload: listData})
    }
}

export const showEditeRoomOK = 'showEditeRoomOK'
export const showEditeRoom = (record) => {
    return dispatch => {
        dispatch({type: "showEditeRoomOK", payload: record})
    }
}

export const hideEditeRoomOK = 'hideEditeRoomOK'
export const hideEditeRoom = () => {
    return dispatch => {
        dispatch({type: "hideEditeRoomOK", payload: {}})
    }
}

export const deleteRoomSuccess = 'deleteRoomSuccess'
export const deleteRoom = (key, tabIndex) => {
    return (dispatch, getState) => {
        let listData = [].concat(getState().edite.listData);
        listData[tabIndex].rooms.forEach((item, index) => {
            if (item.key.toString() === key.toString()) {
                listData[tabIndex].rooms.splice(index, 1);
            }
        })
        dispatch({type: "deleteRoomSuccess", payload: listData})
    }
}

export const editeRoomSuccess = 'editeRoomSuccess'
export const editeRoom = (data, tabIndex) => {
    return (dispatch, getState) => {
        let listData = [].concat(getState().edite.listData);
        listData[tabIndex].rooms.map(item => {
            if (item.key.toString() === data.key.toString()) {
                return Object.assign(item, data)
            }
            return item
        })
        dispatch({type: "editeRoomSuccess", payload: listData})
    }
}

function ran() {
    let num = new Date().getTime().toString();
    return num;
}