import { array, object, string } from "zod"

export const authSchema = object({
    name: string(),
    email: string().email(),
    password: string(),
    password_confirmation: string(),
    token: string()
})

export const userSchema = authSchema.pick({ name: true, email: true }).extend({
    _id: string()
})

export const teamMemberSchema = userSchema.pick({ name: true, email: true, _id: true })
export const teamMembersSchema = array(teamMemberSchema)
