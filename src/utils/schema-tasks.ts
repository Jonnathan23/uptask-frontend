import { z } from "zod";

export const tastkStatusSchema = z.enum(['pending', 'onHold', 'inProgress', 'underReview', 'completed'])

export const TaskSchema = z.object({
    _id: z.string(),
    name: z.string(),
    description: z.string(),
    project: z.string(),
    status: tastkStatusSchema,
    createdAt: z.string(),
    updatedAt: z.string()
})