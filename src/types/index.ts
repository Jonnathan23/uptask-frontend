import { z } from "zod";
import { projectSchema } from "utils/schema-projects";
import { TaskSchema, tastkStatusSchema } from "@/utils/schema-tasks";

//* |--------| | Projects | |--------| */

export type Project = z.infer<typeof projectSchema>
export type ProjectFormData = Pick<Project, "projectName" | "clientName" | "description">

//* |--------| | Tasks | |--------| */

export type Task = z.infer<typeof TaskSchema>
export type TaskFormData = Pick<Task, "name" | "description">
export type GroupedTasks = { [key: string]: Task[] }
export type TaskStatus = z.infer<typeof tastkStatusSchema>