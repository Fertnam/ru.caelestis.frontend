export interface IAuthenticate {
    isAuth(): boolean
}

export type UserFields = {
    id: number
    created_at: string

    username: string
    email: string
    ban_reason: string
    activation_code: string

    balance: number
    cs_group_id: number
    xf_user_id: number | null

    updated_at: string | null
    email_verified_at: string | null
}

export class Guest implements IAuthenticate {
    public isAuth(): boolean {
        return false
    }
}

export class User implements IAuthenticate {
    private readonly id: number
    private readonly createdAt: string

    private username: string
    private email: string
    private banReason: string
    private activationCode: string | null

    private balance: number
    private groupId: number
    private xfUserId: number | null

    private updatedAt: string | null
    private emailVerifiedAt: string | null

    public constructor(fields: UserFields) {
        this.id = fields.id
        this.createdAt = fields.created_at

        this.username = fields.username
        this.email = fields.email
        this.banReason = fields.ban_reason
        this.activationCode = fields.activation_code

        this.balance = fields.balance
        this.groupId = fields.cs_group_id
        this.xfUserId = fields.xf_user_id

        this.updatedAt = fields.updated_at
        this.emailVerifiedAt = fields.email_verified_at
    }

    public isAuth(): boolean {
        return true
    }

    public getUsername(): string {
        return this.username
    }

    public getEmail(): string {
        return this.email
    }

    public getCreatedAt(): string {
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }

        return new Date(this.createdAt).toLocaleDateString('ru-RU', options)
    }

    public getBalance(): number {
        return this.balance
    }
}
