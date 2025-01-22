import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Dashboard from "./pages/Dashboard";
import CreateProject from "./pages/projects/CreateProject";
import EditProject from "./pages/projects/EditProject";
import ProjectDetails from "./pages/projects/ProjectDetails";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";

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

                <Route element={<AuthLayout />}>
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/register" element={<SignUp />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}