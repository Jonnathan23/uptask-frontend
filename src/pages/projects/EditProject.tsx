import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProjectById } from "@/services/serviceProject";
import EditProjectForm from "@/components/projects/EditProjectForm";

export default function EditProject() {
    const params = useParams();
    const projectId = params.projectId!

    const { data, isLoading, isError } = useQuery({
        queryKey: ['editProject', projectId],
        queryFn: () => getProjectById(projectId)
    })

    if (isLoading) return <h1>Cargando...</h1>
    if (isError) return <Navigate to={'/404'} />
    if (data) return <EditProjectForm data={data} projectId={projectId} />
}