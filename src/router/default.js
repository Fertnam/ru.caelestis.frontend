import IndexPage from '@default-views/Index'
import ServerPage from '@default-views/Server'
import BanlistPage from '@default-views/Banlist'
import DonatePage from '@default-views/Donate'
import RulesPage from '@default-views/Rules'
import RegistrationPage from '@default-views/Registration'

export default [
  {
    path: '',
    name: 'default.index',
    component: IndexPage,
  },
  {
    path: 'server/:name/:version?',
    name: 'default.server',
    component: ServerPage,
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
