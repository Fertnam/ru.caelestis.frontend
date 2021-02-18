import IndexPage from '@/views/admin/Index'
import UsersPage from '@/views/admin/Users'

const LAYOUT = 'admin'

export default [
  {
    path: '',
    name: `${LAYOUT}.index`,
    component: IndexPage,
  },
  {
    path: 'users',
    name: `${LAYOUT}.users`,
    component: UsersPage,
  },
]