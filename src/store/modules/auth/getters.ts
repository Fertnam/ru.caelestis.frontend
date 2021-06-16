import { GetterTree } from 'vuex'
import { AuthState } from './index'

const getters: GetterTree<AuthState, any> = {
    user(state) {
        return state.user
    },
}

export default getters
