export const searchListSuccess = "searchListSuccess";
export const searchList = () => {
    return dispatch => {
        dispatch({type: "searchListSuccess", payload: {}})
    }
}