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

export type UserRegisterFields = {
    username: string
    email: string
    password: string
    password_confirmation: string
}

export type UserAuthFields = {
    username: string
    password: string
}

export enum SkinViewMode {
    FRONT = 1,
    BACK = 2,
    HEAD = 3,
}
