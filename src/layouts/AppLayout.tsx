import { Link, Navigate, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Logo from "@/components/Logo";
import NavMenu from "@/components/NavMenu";
import { useAuth } from "@/hooks/useAuth";
import Loading from "@/pages/Loading";

export default function AppLayout() {

    const { data, isError, isLoading } = useAuth()

    if (isLoading) return <Loading />
    if (isError) return <Navigate to={'/auth/login'} />

    if (data) return (
        <>
            <header className="bg-gray-800 py-5">
                <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center">

                    <div className="w-64 lg:ml-16">
                        <Link to="/">
                            <Logo />
                        </Link>

                    </div>
                    <nav className="lg:mr-16">

                        <NavMenu
                            name={data.name}
                        />
                    </nav>
                </div>
            </header>

            <section className="max-w-screen-2xl mx-auto mt-10 p-5 lg:pr-16 pl-16">
                <Outlet />
            </section>

            <footer className="py-5">
                <p className="text-center">
                    Todos los derechos reservados {new Date().getFullYear()}
                </p>
            </footer>

            <ToastContainer
                pauseOnHover={false}
                pauseOnFocusLoss={false}
            />
        </>
    )
} 