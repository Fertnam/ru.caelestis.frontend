import axios, { AxiosStatic } from 'axios'
import $store from '@/store'
import { User } from '@classes/User'

export type UserRegisterFields = {
    username: string
    email: string
    password: string
    password_confirmation: string
}

export type UserAuthFields = {
    username: string
    password: string
}

export class Users {
    public register(data: UserRegisterFields): Promise<AxiosStatic> {
        return axios.post('http://127.0.0.1:8000/api/register', data)
    }

    public async auth(data: UserAuthFields): Promise<any> {
        const {
            data: { token },
        } = await axios.post('http://127.0.0.1:8000/api/login', data)

        localStorage.setItem('token', token)

        const user: User = await this.getBySession()

        $store.commit('auth/setUser', user)
    }

    public async getBySession(): Promise<User> {
        const { data: user } = await axios.get(
            'http://127.0.0.1:8000/api/user',
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            }
        )

        return new User(user)
    }
}
