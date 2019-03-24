import axios from 'axios'

const api = axios.create({
    baseURL: 'https://randomuser.me/api/',
})

export function GetUsers(maxUsers, nat) {
    return api.get(`?results=${maxUsers}&nat=${nat}`)
}
