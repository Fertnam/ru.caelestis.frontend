import { createStore, ModuleTree } from 'vuex'
import auth from './modules/auth'

const modules: ModuleTree<any> = {
    auth,
}

export default createStore({
    modules,
})
