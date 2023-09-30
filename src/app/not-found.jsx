import Link from "next/link"

function NotFound() {
    return (
        <section className="flex h-[calc(100vh-7rem)] justify-center items-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-6">404 | Not Found</h1>
                <Link href='/' className="text-slate-300">
                    Volver al inicio
                </Link>
            </div>
        </section>
    )
}

export default NotFound