import { string, object, array } from "zod"
import { userSchema } from "./auth.schema"

export const projectSchema = object({
    _id: string(),
    projectName: string(),
    clientName: string(),
    description: string(),
    manager: string(userSchema.pick({ _id: true }))
})

export const dashboardSchema = array(
    projectSchema.pick({
        _id: true,
        projectName: true,
        clientName: true,
        description: true,
        manager: true
    })
)