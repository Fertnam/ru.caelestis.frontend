import axios from 'axios'

export type UsersRegisterData = {
    username: string
    email: string
    password: string
    password_confirmation: string
}

export class Users {
    public async register(data: UsersRegisterData): Promise<any> | never {
        await axios.post('http://127.0.0.1:8000/api/register', data)
    }

    public auth(marker: string, password: string): void | never {
        alert(`Авторизация: ${marker} | ${password}`)
    }
}
