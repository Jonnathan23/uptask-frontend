import { string, object, array } from "zod"

export const projectSchema = object({
    _id: string(),
    projectName: string(),
    clientName: string(),
    description: string(),
})

export const dashboardSchema = array(
    projectSchema.pick({
        _id: true,
        projectName: true,
        clientName: true,
        description: true
    })
)