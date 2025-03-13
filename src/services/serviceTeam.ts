import api from "@/lib/axios";
import { Project, TeamMember, TeamMemberForm } from "../types";
import { handlerApiError } from "@/utils/utils";
import { teamMembersSchema } from "@/utils/auth.schema";

export const findUserByEmail = async ({ projectId, formData }: { projectId: Project['_id'], formData: TeamMemberForm }) => {
    const url = `/projects/${projectId}/team/find`
    try {
        const { data } = await api.post(url, formData)
        return data
    } catch (error) {
        handlerApiError(error)
    }
}

export const addUserToProject = async ({ projectId, id }: { projectId: Project['_id'], id: TeamMember['_id'] }) => {
    const url = `/projects/${projectId}/team`
    try {
        const { data } = await api.post<string>(url, { id })
        return data
    } catch (error) {
        handlerApiError(error)
    }
}

export const getProjectTeam = async (projectId: Project['_id']) => {
    const url = `/projects/${projectId}/team`
    try {
        const { data } = await api(url)
        const response = teamMembersSchema.safeParse(data)
        if (response.success) return response.data
    } catch (error) {
        handlerApiError(error)
    }
}

export const removeUserFromProject = async ({ projectId, userId }: { projectId: Project['_id'], userId: TeamMember['_id'] }) => {
    const url = `/projects/${projectId}/team/${userId}`
    try {
        const { data } = await api.delete<string>(url)
        return data
    } catch (error) {
        handlerApiError(error)
    }
}
