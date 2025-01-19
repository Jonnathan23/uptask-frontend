import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Dashboard from "./pages/Dashboard";
import CreateProject from "./pages/projects/CreateProject";
import EditProject from "./pages/projects/EditProject";
import ProjectDetails from "./pages/projects/ProjectDetails";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<Dashboard />} index />
                    <Route path="/projects/create" element={<CreateProject />} />
                    <Route path="/projects/:projectId" element={<ProjectDetails />} />
                    <Route path="/projects/:projectId/edit" element={<EditProject />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}