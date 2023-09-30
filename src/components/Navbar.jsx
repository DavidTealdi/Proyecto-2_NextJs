import Link from "next/link"

function Navber() {
    return (
        <nav className="bg-slate-900">
            <div className="containers mx-auto flex justify-between items-center py-3">
                <Link href='/'>
                    <h3 className="font-bold text-3xl ml-7">
                        NextCRUD
                    </h3>
                </Link>

                <ul className="flex gap-x-2 text-lg font-bold mr-8">
                    <li>
                        <Link href='/'
                        className="text-slate-300 hover:text-slate-200 mr-5">
                            Tareas
                        </Link>
                    </li>
                    <li>
                        <Link href='/new'
                         className="text-slate-300 hover:text-slate-200 mr-5">
                            Tarea nueva
                        </Link>
                    </li>
                    <li>
                        <Link href='/about'
                         className="text-slate-300 hover:text-slate-200">
                            about
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navber