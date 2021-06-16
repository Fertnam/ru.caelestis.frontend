import { createStore, ModuleTree } from 'vuex'
import user from '@/store/modules/user'

const modules: ModuleTree<any> = {
    user,
}

export default createStore({
    modules,
})
