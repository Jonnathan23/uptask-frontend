import { useForm } from "react-hook-form";
import { UserLoginForm } from "@/types/index";
import ErrorMessage from "@/components/ErrorMessage";
import { Link, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authenticateUser } from "@/services/serviceAuth";
import { toast } from "react-toastify";

export default function Login() {

    const initialValues: UserLoginForm = {
        email: '',
        password: '',
    }
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues })
    const navigate = useNavigate();

    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationFn: authenticateUser,
        onError: (error) => toast.error(error.message || 'Error con el servidor, intentelo más tarde'),
        onSuccess: () => {
            toast.success('Inciando sesion...')
            queryClient.invalidateQueries({queryKey: ['user']})
            navigate('/')            
        }
    })

    const handleLogin = (formData: UserLoginForm) => { mutate(formData) }

    return (
        <>
            <h1 className="text-5xl font-black text-white">Iniciar Sesión</h1>
            <p className="text-2xl font-light text-white mt-5">
                Comienza a planear tus proyectos {''}
                <span className=" text-fuchsia-500 font-bold"> iniciando sesión en este formulario</span>
            </p>

            <form
                onSubmit={handleSubmit(handleLogin)}
                className="space-y-8 mt-10 p-10 bg-white"
                noValidate
            >
                <div className="flex flex-col gap-5">
                    <label
                        className="font-normal text-2xl"
                    >Email</label>

                    <input
                        id="email"
                        type="email"
                        placeholder="Email de Registro"
                        className="w-full p-3  border-gray-300 border"
                        {...register("email", {
                            required: "El Email es obligatorio",
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "E-mail no válido",
                            },
                        })}
                    />
                    {errors.email && (
                        <ErrorMessage>{errors.email.message}</ErrorMessage>
                    )}
                </div>

                <div className="flex flex-col gap-5">
                    <label
                        className="font-normal text-2xl"
                    >Password</label>

                    <input
                        type="password"
                        placeholder="Password de Registro"
                        className="w-full p-3  border-gray-300 border"
                        {...register("password", {
                            required: "El Password es obligatorio",
                        })}
                    />
                    {errors.password && (
                        <ErrorMessage>{errors.password.message}</ErrorMessage>
                    )}
                </div>

                <input
                    type="submit"
                    value='Iniciar Sesión'
                    className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3  text-white font-black  text-xl cursor-pointer"
                />
            </form>

            <nav className="mt-10 flex flex-col space-y-4">
                <Link
                    className="text-center text-gray-300 font-normal"
                    to={'/auth/register'}
                >
                    ¿No tienes cuenta? Registrate
                </Link>
                <Link
                    className="text-center text-gray-300 font-normal"
                    to={'/auth/forgot-password'}
                >
                    ¿Olvidaste tu contraseña? Restablecela
                </Link>
            </nav>
        </>
    )
}