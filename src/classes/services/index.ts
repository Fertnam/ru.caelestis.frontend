import Users from './Users'

export class Services {
    public readonly users: Users

    public constructor() {
        this.users = new Users()
    }
}

const services: Services = new Services()

export default services
