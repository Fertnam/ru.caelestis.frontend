import { MutationTree } from 'vuex'
import { AuthState } from './index'
import { User, Guest } from '@classes/User'

const mutations: MutationTree<AuthState> = {
    saveUser(state, user: User) {
        state.user = user
    },
    reset(state) {
        state.user = new Guest()
    },
}

export default mutations
