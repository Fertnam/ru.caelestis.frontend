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
    public readonly DEFAULT_SKIN = `${process.env.VUE_APP_API}/cabinet/skins/@default.png`

    private readonly skin: string
    private readonly cape: string

    private readonly skinView: string

    public constructor(user: User) {
        this.skin = `${
            process.env.VUE_APP_API
        }/cabinet/skins/${user.getUsername()}.png`

        this.cape = `${
            process.env.VUE_APP_API
        }/cabinet/capes/${user.getUsername()}.png`

        this.skinView = `${
            process.env.VUE_APP_API
        }/scripts/skin.php?user=${user.getUsername()}`
    }

    public getSkin(): Promise<string> {
        return new Promise((resolve, reject) => {
            const image: HTMLImageElement = new Image()

            image.onerror = image.onabort = () => {
                reject(this.DEFAULT_SKIN)
            }

            image.onload = () => {
                resolve(this.skin)
            }

            image.src = this.skin
        })
    }

    public getCape(): string {
        return this.cape
    }

    public getSkinView(mode: SkinViewMode, size: number = 128): string {
        return `${this.skinView}&mode=${mode}&size=${size}`
    }

    public async updateSkin(skin: File): Promise<void> {
        const formData: FormData = new FormData()

        formData.append('image', skin)

        await axios.post(
            `${process.env.VUE_APP_API}/api/upload/skin`,
            formData,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'multipart/form-data',
                },
            }
        )
    }

    public async updateCape(cape: File): Promise<void> {
        const formData: FormData = new FormData()

        formData.append('image', cape)

        await axios.post(
            `${process.env.VUE_APP_API}/api/upload/cloak`,
            formData,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'multipart/form-data',
                },
            }
        )
    }
}
