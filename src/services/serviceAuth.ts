import { handlerApiError } from "@/utils/utils";
import { ConfirmToken, ForgotPasswordForm, RequestConfirmationCodeForm, UserLoginForm, UserRegistrationForm } from "../types";
import api from "@/lib/axios";


export async function createAccount(formData: UserRegistrationForm) {
    try {
        const url = `/auth/create-account`

        const { data } = await api.post<string>(url, formData)
        return data
    } catch (error) {
        handlerApiError(error)
    }
}

export async function confirmAccount(formData: ConfirmToken) {
    try {
        const url = `/auth/confirm-account`

        const { data } = await api.post<string>(url, formData)
        return data
    } catch (error) {
        handlerApiError(error)
    }
}


export async function requestConfirmationAccount(formData: RequestConfirmationCodeForm) {
    try {
        const url = `/auth/request-code`

        const { data } = await api.post<string>(url, formData)
        return data
    } catch (error) {
        handlerApiError(error)
    }
}


export async function authenticateUser(formData: UserLoginForm) {
    try {
        const url = `/auth/login`

        const { data } = await api.post<string>(url, formData)
        return data
    } catch (error) {
        handlerApiError(error)
    }
}

export async function forgotPassword(formData: ForgotPasswordForm) {
    try {
        const url = `/auth/forgot-password`

        const { data } = await api.post<string>(url, formData)
        return data
    } catch (error) {
        handlerApiError(error)
    }
}