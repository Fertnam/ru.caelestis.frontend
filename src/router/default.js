import IndexPage from '@/views/default/Index'
import RulesPage from '@/views/default/Rules'

const LAYOUT = 'default'

export default [
    {
        path: '',
        name: `${LAYOUT}.index`,
        component: IndexPage
    },
    {
        path: 'rules',
        name: `${LAYOUT}.rules`,
        component: RulesPage
    }
]