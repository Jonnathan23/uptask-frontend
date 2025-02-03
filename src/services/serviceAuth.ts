import { handlerApiError } from "@/utils/utils";
import { ConfirmToken, ForgotPasswordForm, NewPasswordForm, RequestConfirmationCodeForm, UserLoginForm, UserRegistrationForm } from "../types";
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
    const url = `/auth/login`
    try {
        const { data } = await api.post<string>(url, formData)
        localStorage.setItem('AUTH_TOKEN_KEY', data)
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

export const validateToken = async (formData: ConfirmToken) => {
    const url = 'auth/validate-token'
    try {
        const { data } = await api.post<string>(url, formData)
        return data
    } catch (error) {
        handlerApiError(error)
    }
}

export const updatePasswordWithToken = async ({ formData, token }: { formData: NewPasswordForm, token: ConfirmToken['token'] }) => {
    const url = `auth/update-password/${token}`
    try {
        const { data } = await api.post<string>(url, formData)
        return data
    } catch (error) {
        handlerApiError(error)
    }
}

export const getUser = async () => {
    try {
        const { data } = await api.get('/auth/user')
        console.log(data)
        return data
    } catch (error) {
        handlerApiError(error)
    }
}