import { UserAuthFields } from '@classes/Api/Users'
import api from '@classes/Api'
import $store from '@/store'

export default class UsersService {
    public async login(data: UserAuthFields): Promise<any> {
        const token: string = await api.users.createAuthToken(data)

        localStorage.setItem('token', token)
        this.saveByAuthToken()
    }

    public async logout(): Promise<any> {
        await api.users.destroyAuthToken()

        localStorage.removeItem('token')
        $store.commit('auth/reset')
    }

    public async saveByAuthToken(): Promise<any> {
        $store.commit('auth/saveUser', await api.users.getByAuthToken())
    }
}
