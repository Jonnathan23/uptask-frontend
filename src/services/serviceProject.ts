import api from "@/lib/axios";
import { isAxiosError } from "axios";
import { Project, ProjectFormData } from "types";
import { dashboardSchema } from "@/utils/projects.schema";
import { handlerApiError } from "@/utils/utils";

export const createProject = async (formData: ProjectFormData) => {
    try {
        const { data } = await api.post('/projects', formData)
        return data

    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
        throw new Error('Error desconocido')
    }
}

export const getProjects = async () => {
    try {
        const { data } = await api.get('/projects')
        const response = dashboardSchema.safeParse(data)
        console.log(response)

        if (response.success) {
            return response.data
        }
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }

        throw new Error('Error desconocido')
    }
}

export const getProjectById = async (id: Project['_id']) => {
    try {
        const { data } = await api.get(`/projects/${id}`)
        return data

    } catch (error) {
        handlerApiError(error)
    }
}

type ProjectAPIType = {
    formData: ProjectFormData;
    projectId: Project['_id'];
}
export const updateProject = async ({ formData, projectId }: ProjectAPIType) => {
    try {
        const { data } = await api.put<string>(`/projects/${projectId}`, formData)
        return data

    } catch (error) {
        handlerApiError(error)
    }
}

export const deleteProjectById = async (id: Project['_id']) => {
    try {
        const { data } = await api.delete<string>(`/projects/${id}`)
        return data

    } catch (error) {
        handlerApiError(error)
    }
}