import Users from './Users'

export class Services {
    public readonly users: Users

    public constructor() {
        this.users = new Users()
    }
}

export default new Services()
