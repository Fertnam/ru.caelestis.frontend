import IndexPage from '@/views/default/Index'
import BanlistPage from '@/views/default/Banlist'
import DonatePage from '@/views/default/Donate'
import RulesPage from '@/views/default/Rules'
import RegistrationPage from '@/views/default/Registration'

export default [
  {
    path: '',
    name: 'default.index',
    component: IndexPage,
  },
  {
    path: 'banlist',
    name: 'default.banlist',
    component: BanlistPage,
  },
  {
    path: 'donate',
    name: 'default.donate',
    component: DonatePage,
  },
  {
    path: 'rules',
    name: 'default.rules',
    component: RulesPage,
  },
  {
    path: 'registration',
    name: 'default.registration',
    component: RegistrationPage,
  },
]
