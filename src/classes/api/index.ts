import { Users } from './Users'
import { Articles } from './Articles'

export class Api {
    public readonly users: Users
    public readonly articles: Articles

    public constructor() {
        this.users = new Users()
        this.articles = new Articles()
    }
}

const api: Api = new Api()

export default api
