function getHeaders () {
    return {
        'Content-Type': 'application/json'
    }
}

function getOptions (method, data) {
    return {
        method,
        headers: getHeaders(),
        body: JSON.stringify(data)
    }
}

async function send (path, options) {
    try {
        const response = await window.fetch(path, options)
        const data = await response.json()

        if (response.ok) {
            return {
                status: response.status,
                ok: response.ok,
                data
            }
        }

        throw data
    } catch (error) {
        console.error(error)
        throw error
    }
}

export function get (url, data) {
    const options = getOptions('get', data)
    return send(url, options)
}

export function post (url, data) {
    const options = getOptions('post', data)
    return send(url, options)
}

export default {
    get,
    post
}
