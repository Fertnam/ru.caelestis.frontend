import axios, { AxiosStatic } from 'axios'
import $store from '@store/index'
import { User } from '@models/User'
import {
    UserRegisterFields,
    UserAuthFields,
    UserFields,
} from '@classes/types/User'

export default class UsersService {
    public create(data: UserRegisterFields): Promise<AxiosStatic> {
        return axios.post(`${process.env.VUE_APP_API}/api/register`, data)
    }

    public activate(code: string): Promise<AxiosStatic> {
        return axios.put(`${process.env.VUE_APP_API}/api/activate`, {
            activation_code: code,
        })
    }

    public async login(data: UserAuthFields): Promise<void> {
        const {
            data: { token },
        } = await axios.post(`${process.env.VUE_APP_API}/api/login`, data)

        localStorage.setItem('token', token)
        this.saveInStoreByAuthToken()
    }

    public async logout(): Promise<void> {
        await axios.post(`${process.env.VUE_APP_API}/api/logout`, null, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })

        localStorage.removeItem('token')
        $store.commit('auth/reset')
    }

    public async getByAuthToken(): Promise<User> {
        const { data: user } = await axios.get(
            `${process.env.VUE_APP_API}/api/user`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            }
        )

        return new User(user as UserFields)
    }

    public async saveInStoreByAuthToken(): Promise<void> {
        $store.commit('auth/saveUser', await this.getByAuthToken())
    }
}
