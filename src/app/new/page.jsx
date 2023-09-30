"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

function NewPage({params}) {

    const router = useRouter()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {

        if(params.id) {
        
            fetch(`/api/tasks/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setTitle(data.title)
                setDescription(data.description)
            })
        }  
    
    }, [])

    const detele = async (id) => {
        try {
            
            const res = await fetch(`/api/tasks/${id}`, {
                method: "DELETE"
            })

            const data = await res.json()

            router.refresh()

            router.push('/')

        } catch (error) {
            console.log(error)
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        if(params.id) {
            
            try {

                const res = await fetch(`/api/tasks/${params.id}`, {
                    method: 'PUT',
                    body: JSON.stringify({title, description}),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
    
                const data = await res.json()

                router.refresh()

                router.push('/')
            
            } catch (error) {
                console.log(error)
            }
           
        } else {

            try {
               
                const res = await fetch('/api/tasks', {
                    method: 'POST',
                    body: JSON.stringify({title, description}),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
    
                const data = await res.json()

                router.refresh()

                router.push('/')
            
            } catch (error) {
                console.log(error)
            }
        }
    }                                                                   

    return (
        <div className="h-screen flex justify-center items-center">

            <form className="bg-slate-800 p-10 lg:w-1/4 md:w-1/2"
                onSubmit={onSubmit}
            >
                <label htmlFor="title" className="font-bold text-sm">Titulo de tarea</label>
                <input type="text" placeholder="Titulo"
                id="title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className="border border-gray-400 p-2 mb-4 w-full text-black"/>

                <label htmlFor="description" className="font-bold text-sm">Descripcion de la tarea</label>
                <textarea rows="3" placeholder="Describe tu tarea" id="description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className="border border-gray-400 p-2 mb-4 w-full text-black"></textarea>

                {
                    params.id 
                        ? 
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Editar</button> 
                        : 
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Crear</button>
                }

                

                {
                    params.id && (
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4" type="button"
                        onClick={() => detele(params.id)}>Eliminar</button>
                    )
                }
            </form>
        </div>
    )
}

export default NewPage