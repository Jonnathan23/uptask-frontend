import { handlerApiError } from "@/utils/utils";
import { UserRegistrationForm } from "../types";
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