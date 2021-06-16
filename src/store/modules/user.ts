import { Module, GetterTree, MutationTree } from 'vuex'
import { User } from '@classes/Api/Users'

interface UserState {
    user: User | null
}

const getters: GetterTree<UserState, any> = {
    get(state) {
        return state.user
    },
}

const mutations: MutationTree<UserState> = {
    set(state, user: User) {
        state.user = user
    },
}

const user: Module<UserState, any> = {
    namespaced: true,

    state() {
        return {
            user: null,
        }
    },

    getters,
    mutations,
}

export default user
