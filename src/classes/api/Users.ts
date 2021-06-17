import axios from 'axios'
import { User } from '@models/User'

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
    public create(data: UserRegisterFields): Promise<void> {
        return axios.post(process.env.VUE_APP_API + 'register', data)
    }

    public async createAuthToken(data: UserAuthFields): Promise<string> {
        const {
            data: { token },
        } = await axios.post(process.env.VUE_APP_API + 'login', data)

        return token as string
    }

    public destroyAuthToken(): Promise<void> {
        return axios.post(process.env.VUE_APP_API + 'logout', null, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
    }

    public async getByAuthToken(): Promise<User> {
        const { data: user } = await axios.get(
            process.env.VUE_APP_API + 'user',
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            }
        )

        return new User(user)
    }
}
