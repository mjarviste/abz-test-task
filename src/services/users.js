import axios from 'axios'

const baseUrl = "https://frontend-test-assignment-api.abz.agency/api/v1/"

const getAll = () => {
    return axios.get(`${baseUrl}users?count=12`).then(response => response.data)
}

const getPositions = () => {
    return axios.get(`${baseUrl}positions`).then(response => response.data)
}

const addUser = (newUser, token) => {
    return axios.post(`${baseUrl}users`, newUser, {
        headers: {
            "accept": "application/json",
            "Token": token,
            "Content-Type": "multipart/form-data"
          },
    })
}

const getToken = () => {
    return axios.get(`${baseUrl}token`).then(response => response.data)
}

export default {getAll, getPositions, addUser, getToken}