import api from "@/lib/axios";
import { Project, Task, TaskFormData } from "../types";
import { isAxiosError } from "axios";
import { TaskSchema } from "@/utils/tasks.schema";
type CreateTasktType = {
    formData: TaskFormData
    projectId: Project['_id']
    taskId: Task['_id']
    status: Task['status']
}


/**
 * Creates a task
 * @param {Object} params - Parameters for the create task API call
 * @param {TaskFormData} params.formData - The form data for the task
 * @param {string} params.projectId - The ID of the project
 * @returns {Promise<string>} A promise with the response from the API
 */
export async function createTask({ formData, projectId }: Pick<CreateTasktType, 'formData' | 'projectId'>) {
    try {
        const url = `/projects/${projectId}/tasks`
        const { data } = await api.post<string>(url, formData)
        return data

    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

/**
 * Gets a task by its ID
 * @param {Object} params - Parameters for the get task API call
 * @param {string} params.projectId - The ID of the project
 * @param {string} params.taskId - The ID of the task
 * @returns {Promise<Task | null>} A promise with the task data or null if the task does not exist
 */
export async function getTaskById({ projectId, taskId }: Pick<CreateTasktType, 'projectId' | 'taskId'>) {
    try {
        const url = `/projects/${projectId}/tasks/${taskId}`
        const { data } = await api.get(url)
        const response = TaskSchema.safeParse(data)

        console.log(response)
        if (response.success) {
            return response.data
        }

    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }

}

/**
 * Updates a task
 * @param {Object} params - Parameters for the update task API call
 * @param {string} params.projectId - The ID of the project
 * @param {string} params.taskId - The ID of the task
 * @param {Object} params.formData - The form data for the task
 * @returns {Promise<string>} A promise with the response from the API
 */
export async function updateTask({ projectId, taskId, formData }: Pick<CreateTasktType, 'projectId' | 'taskId' | 'formData'>) {
    try {
        const url = `/projects/${projectId}/tasks/${taskId}`
        const { data } = await api.put<string>(url, formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }

}

/**
 * Deletes a task by its ID
 * @param {Object} params - Parameters for the delete task API call
 * @param {string} params.projectId - The ID of the project
 * @param {string} params.taskId - The ID of the task
 * @returns {Promise<string>} A promise with the response from the API
 * @throws {Error} Throws an error if the request fails
 */

export async function deleteTask({ projectId, taskId }: Pick<CreateTasktType, 'projectId' | 'taskId'>) {
    try {
        const url = `/projects/${projectId}/tasks/${taskId}`
        const { data } = await api.delete<string>(url)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }

}

/**
 * Updates the status of a task by its ID
 * @param {Object} params - Parameters for the update task status API call
 * @param {string} params.projectId - The ID of the project
 * @param {string} params.taskId - The ID of the task
 * @param {string} params.status - The new status for the task
 * @returns {Promise<string>} A promise with the response from the API
 * @throws {Error} Throws an error if the request fails
 */
export async function updateStatusTask({ projectId, taskId, status }: Pick<CreateTasktType, 'projectId' | 'taskId' | 'status'>) {
    try {
        const url = `/projects/${projectId}/tasks/${taskId}/status`
        const { data } = await api.post<string>(url, { status })
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }

}