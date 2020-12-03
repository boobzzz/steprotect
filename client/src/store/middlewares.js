import { fetchJSON } from '../utils/api/fetchJSON';
import { handleError } from '../utils/helpers/error';

export const fetchApi = (url, options, type) => async (dispatch) => {
    try {
        const res = await fetchJSON(url, options)
        const data = res.body

        !data.hasOwnProperty('status')
        ? dispatch({ type: type, payload: data })
        : dispatch({ type: 'ERROR', payload: data })
    } catch (e) {
        dispatch({ type: 'ERROR', payload: handleError(e) })
    }
}
