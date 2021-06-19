import axios from 'axios'
import { UserFields, SkinViewMode } from '@classes/types/User'

export interface IAuthenticate {
    isGuest(): boolean
}

export class Guest implements IAuthenticate {
    public isGuest(): boolean {
        return true
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

    public readonly resources: UserResources

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

        this.resources = new UserResources(this)
    }

    public isGuest(): boolean {
        return false
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

class UserResources {
    private readonly skin: string
    private readonly cape: string

    private readonly collectedSkin: string

    public constructor(user: User) {
        this.skin = `http://127.0.0.1:8000/image/skins/${user.getUsername()}.png`
        this.cape = `http://127.0.0.1:8000/image/cloaks/${user.getUsername()}.png`

        this.collectedSkin = `http://127.0.0.1:8000/scripts/skin.php?user=${user.getUsername()}`
    }

    public getSkin(): string {
        return this.skin
    }

    public getCape(): string {
        return this.cape
    }

    public getSkinView(mode: SkinViewMode, size: number = 128): string {
        return `${this.collectedSkin}&mode=${mode}&size=${size}`
    }

    public async updateSkin(skin: File): Promise<void> {
        const formData: FormData = new FormData()

        formData.append('image', skin)

        await axios.post(process.env.VUE_APP_API + 'upload/skin', formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'multipart/form-data',
            },
        })
    }

    public async updateCape(cape: File): Promise<void> {
        const formData: FormData = new FormData()

        formData.append('image', cape)

        await axios.post(process.env.VUE_APP_API + 'upload/cloak', formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'multipart/form-data',
            },
        })
    }
}
