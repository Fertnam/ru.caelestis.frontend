import { Module } from 'vuex'
import { IUser, Guest } from '@classes/User'

import getters from './getters'
import mutations from './mutations'

export interface AuthState {
    user: IUser
}

const auth: Module<AuthState, any> = {
    namespaced: true,

    state() {
        return {
            user: new Guest(),
        }
    },

    getters,
    mutations,
}

export default auth
