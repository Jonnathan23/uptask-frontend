import { GroupedTasks } from "../types"

export const initialStatusGropus: GroupedTasks = {
    pending: [],
    onHold: [],
    inProgress: [],
    underReview: [],
    completed: []
}

export const statusStyles: { [key: string]: string } = {
    pending: 'border-t-slate-500',
    onHold: 'En border-t-red-500',
    inProgress: 'En border-t-blue-500',
    underReview: 'En border-t-amber-500',
    completed: 'border-t-emerald-500'
}
export const statusTranslations: { [key: string]: string } = {
    pending: 'Pendiente',
    onHold: 'En Espera',
    inProgress: 'En Progreso',
    underReview: 'En Revisión',
    completed: 'Completada'
}