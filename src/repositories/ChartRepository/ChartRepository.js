import { get } from "../../config/request"

const host = process.env.REACT_APP_BASE_URL

export async function fetchAnualResult() {
    return get(`${host}/anual-result`)
}

export async function fetchAnualPercentage() {
    return get(`${host}/anual-percentage`)
}

export async function fetchTimeData() {
    return get(`${host}/time-data`)
}