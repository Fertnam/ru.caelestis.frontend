import { Users } from '@/classes/Api/Users'
import { Articles } from '@/classes/Api/Articles'

export default class Api {
    public readonly users: Users
    public readonly articles: Articles

    public constructor() {
        this.users = new Users()
        this.articles = new Articles()
    }
}
