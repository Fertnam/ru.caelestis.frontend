const IndexPage = () => import('@default-views/Index')
const ServerPage = () => import('@default-views/Server')
const BanlistPage = () => import('@default-views/Banlist')
const DonatePage = () => import('@default-views/Donate')
const RulesPage = () => import('@default-views/Rules')
const RegistrationPage = () => import('@default-views/Registration')

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
