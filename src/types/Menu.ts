import { ILink } from '@/types/Link'

export interface ISubmenuItem extends ILink {
    id: number
    title: string
}

export interface IMenuItem extends ISubmenuItem {
    icon: string
    submenuItems?: ISubmenuItem[]
}
