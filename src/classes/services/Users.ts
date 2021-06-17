import { UserAuthFields } from '@api/Users'
import api from '@api/index'
import $store from '@store/index'

export default class UsersService {
    public async login(data: UserAuthFields): Promise<void> {
        const token: string = await api.users.createAuthToken(data)

        localStorage.setItem('token', token)
        this.saveByAuthToken()
    }

    public async logout(): Promise<void> {
        await api.users.destroyAuthToken()

        localStorage.removeItem('token')
        $store.commit('auth/reset')
    }

    public async saveByAuthToken(): Promise<void> {
        $store.commit('auth/saveUser', await api.users.getByAuthToken())
    }
}
