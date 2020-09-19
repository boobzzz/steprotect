import * as F from '../utils/api/fetch.js';

export const fetchAction = (url, options, type) => async (dispatch) => {
    const res = await F.fetchJSON(url, options)
    const data = res.body

    dispatch({
        type: type,
        payload: data
    })
}
