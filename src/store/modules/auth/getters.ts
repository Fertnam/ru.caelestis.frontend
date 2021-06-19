import { GetterTree } from 'vuex'
import { AuthState } from './index'

const getters: GetterTree<AuthState, any> = {
    user(state) {
        return state.user
    },
    isGuest(state) {
        return state.user.isGuest()
    },
    isAuth(state) {
        return !state.user.isGuest()
    },
}

export default getters
