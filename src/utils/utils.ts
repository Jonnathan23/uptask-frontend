import { isAxiosError } from "axios"

export function formatDate(isoString: string) {
    const date = new Date(isoString)
    const formatter = new Intl.DateTimeFormat('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    return formatter.format(date)
}

export const handlerApiError = (error: unknown) => { 
    if (isAxiosError(error) && error.response) {
        throw new Error(error.response.data.error)
    }

    throw new Error('Error desconocido')
}