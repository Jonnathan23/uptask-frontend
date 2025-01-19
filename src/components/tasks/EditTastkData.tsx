import { getTaskById } from "@/services/serviceTask";
import { useQuery } from "@tanstack/react-query";
import { Navigate, useLocation, useParams } from "react-router-dom";
import EditTaskModal from "./EditTaskModal";

export default function EditTaskData() {
    const params = useParams();
    const projectId = params.projectId!

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search)
    const taskId = queryParams.get('editTaskId')!

    const { data, isError } = useQuery({
        queryKey: ['task', projectId],
        queryFn: () => getTaskById({ projectId, taskId }),
        enabled: !!taskId // Solo se ejecuta si taskId es diferente de null
    })

    if (isError) return <Navigate to={'/404'} />
    if (data && taskId) return <EditTaskModal data={data} taskId={taskId} />
}