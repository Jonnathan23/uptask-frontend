import { z } from "zod";
import { projectSchema } from "utils/projects.schema";
import { TaskSchema, tastkStatusSchema } from "@/utils/tasks.schema";
import { authSchema, teamMemberSchema, userSchema } from "@/utils/auth.schema";

//* |--------| | Projects | |--------| */

export type Project = z.infer<typeof projectSchema>
export type ProjectFormData = Pick<Project, "projectName" | "clientName" | "description">

//* |--------| | Tasks | |--------| */

export type Task = z.infer<typeof TaskSchema>
export type TaskFormData = Pick<Task, "name" | "description">
export type GroupedTasks = { [key: string]: Task[] }
export type TaskStatus = z.infer<typeof tastkStatusSchema>

//* |--------| | Users | |--------| */
export type User = z.infer<typeof userSchema>

//* |--------| | Auth | |--------| */
export type Auth = z.infer<typeof authSchema>
export type UserLoginForm = Pick<Auth, "email" | "password">
export type UserRegistrationForm = Pick<Auth, 'name' | "email" | "password" | 'password_confirmation'>
export type RequestConfirmationCodeForm = Pick<Auth, "email">
export type ForgotPasswordForm = Pick<Auth, "email">
export type NewPasswordForm = Pick<Auth, "password" | "password_confirmation">

export type ConfirmToken = Pick<Auth, 'token'>

//* |--------| | Team | |--------| */
export type TeamMember = z.infer<typeof teamMemberSchema>
export type TeamMemberForm = Pick<TeamMember, 'email'>