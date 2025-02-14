import Logo from "@/components/Logo";

 
export default function Loading() {
    return (
        <>
         <div className="bg-gray-800 min-h-screen">
                <div className="py-10 lg:py-20 mx-auto w-[450px]">
                    <Logo />
                    <div className="mt-10">
                        <h1 className="text-5xl font-black text-center">Cargando...</h1>
                    </div>
                </div>
            </div>
        </>
    );
}
