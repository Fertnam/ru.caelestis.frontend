import axios, { AxiosStatic } from 'axios'
import $store from '@/store'

export type UsersRegisterData = {
    username: string
    email: string
    password: string
    password_confirmation: string
}

export type UsersAuthData = {
    username: string
    password: string
}

export type User = {
    activation_code: string
    balance: number
    ban_reason: string
    created_at: Date
    cs_group_id: number
    email: string
    email_verified_at: Date | null
    group: unknown
    id: number
    updated_at: Date | null
    username: string
    xf_user_id: number
}

export class Users {
    public register(data: UsersRegisterData): Promise<AxiosStatic> {
        return axios.post('http://127.0.0.1:8000/api/register', data)
    }

    public async auth(data: UsersAuthData): Promise<any> {
        const {
            data: { token },
        } = await axios.post('http://127.0.0.1:8000/api/login', data)

        localStorage.setItem('token', token)

        const user: User = await this.getBySession()

        $store.commit('user/set', user)

        console.log($store)
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

        return user
    }
}
