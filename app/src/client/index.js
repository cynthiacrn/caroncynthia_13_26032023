import axios from "axios"

export class ApiClient {
  constructor({ baseURL }) {
    this._httpClient = axios.create({ baseURL })
    this._httpClient.interceptors.request.use(this._injectAuthorization.bind(this))
  }

  _injectAuthorization(res) {
    const authorization = this._getAuthorization()
    if (authorization) {
      res.headers.Authorization = `Bearer ${authorization}`
    }
    return res
  }

  _getAuthorization() {
    return localStorage.getItem('token');
  }

  async login({ email, password }) {
    const res = await this._httpClient.post('user/login', { email, password })
    return res.data
  }

  async getProfile() {
    const res = await this._httpClient.post('user/profile')
    return res.data
  }

  async updateProfile({ firstName, lastName }) {
    const res = await this._httpClient.put('user/profile', { firstName, lastName })
    return res.data
  }
}

export const client = new ApiClient({ baseURL: 'http://localhost:3001/api/v1' })