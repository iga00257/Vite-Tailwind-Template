// const BACKEND_ADDRESS = 'http://172.23.70.611'
const BACKEND_ADDRESS = ''
const BACKEND_PORT = '8080'
const BACKEND_ENDPOINT = `${BACKEND_ADDRESS}:${BACKEND_PORT}`

export const ENDPOINTS = {
  LOGIN: `${BACKEND_ENDPOINT}/login`,
  LOGOUT: `${BACKEND_ENDPOINT}/logout`,
  GET_USER: `${BACKEND_ENDPOINT}/user`
}
