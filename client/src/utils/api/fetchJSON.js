import { merge as mergeDeep } from 'lodash';
import createError from 'http-errors';

// Fetch JSON
export const fetchJSON = async (url, options = {}) => {
    options = mergeDeep(options, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(options.body)
    })

    let res = await fetch(url, options)
    console.log(res)

    if ((res.headers.get('Content-Type') || '').includes('application/json')) {
        try {
            return {
                body: await res.json(),
                status: res.status
            }
        } catch (e) {
            // Bad JSON
            throw createError(res.status, 'Сервер повернув пошкоджений JSON, будь ласка спробуйте пізніше')
        }
    } else {
        // Bad Content-type
        throw createError(res.status, 'Сервер повернув невірний тип MIME, будь ласка спробуйте пізніше')
    }
}
