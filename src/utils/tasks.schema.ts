import { z } from "zod";
import { userSchema } from "./auth.schema";

export const tastkStatusSchema = z.enum(['pending', 'onHold', 'inProgress', 'underReview', 'completed'])

export const TaskSchema = z.object({
    _id: z.string(),
    name: z.string(),
    description: z.string(),
    project: z.string(),
    status: tastkStatusSchema,
    completedBy: userSchema.pick({ _id: true, name: true }).or(z.null()),
    createdAt: z.string(),
    updatedAt: z.string()
})