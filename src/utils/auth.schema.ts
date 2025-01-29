import { object, string } from "zod"

export const authSchema = object({
    name: string(),
    email: string().email(),
    password: string(),
    password_confirmation: string(),
    token: string()
})