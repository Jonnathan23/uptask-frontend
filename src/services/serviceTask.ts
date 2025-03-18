import api from "@/lib/axios";
import { Project, Task, TaskFormData } from "../types";
import { TaskSchema } from "@/utils/tasks.schema";
import { handlerApiError } from "@/utils/utils";

type CreateTasktType = {
    formData: TaskFormData
    projectId: Project['_id']
    taskId: Task['_id']
    status: Task['status']
}


export async function createTask({ formData, projectId }: Pick<CreateTasktType, 'formData' | 'projectId'>) {
    try {
        const url = `/projects/${projectId}/tasks`
        const { data } = await api.post<string>(url, formData)
        return data

    } catch (error) {
        handlerApiError(error)
    }
}

export async function getTaskById({ projectId, taskId }: Pick<CreateTasktType, 'projectId' | 'taskId'>) {
    try {
        const url = `/projects/${projectId}/tasks/${taskId}`
        const { data } = await api.get(url)
        console.log(data)
        const response = TaskSchema.safeParse(data)

        console.log(response.data)
        if (response.success) {
            return response.data
        }

    } catch (error) {
        handlerApiError(error)
    }

}

export async function updateTask({ projectId, taskId, formData }: Pick<CreateTasktType, 'projectId' | 'taskId' | 'formData'>) {
    try {
        const url = `/projects/${projectId}/tasks/${taskId}`
        const { data } = await api.put<string>(url, formData)
        return data
    } catch (error) {
        handlerApiError(error)
    }

}

export async function deleteTask({ projectId, taskId }: Pick<CreateTasktType, 'projectId' | 'taskId'>) {
    try {
        const url = `/projects/${projectId}/tasks/${taskId}`
        const { data } = await api.delete<string>(url)
        return data
    } catch (error) {
        handlerApiError(error)
    }

}


export async function updateStatusTask({ projectId, taskId, status }: Pick<CreateTasktType, 'projectId' | 'taskId' | 'status'>) {
    try {
        const url = `/projects/${projectId}/tasks/${taskId}/status`
        const { data } = await api.post<string>(url, { status })
        return data
    } catch (error) {
       handlerApiError(error)
    }
}