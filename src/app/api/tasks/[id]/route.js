import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, {params}) {

    const data = await prisma.task.findUnique({
        where: {
            id: params.id++
        }
    })

    return NextResponse.json(data)
}

export async function PUT(request, {params}) {

    try {
        
        const data = await request.json()

        const taskPut = await prisma.task.update({
            where: {
                id: params.id++
            },
            data: data
        })

        return NextResponse.json(taskPut)

    } catch (error) {
        return NextResponse.json({message: "No se encontro ninguna tarea"})
    }
}

export async function DELETE(request, {params}) {

    try {
        
        const data = await prisma.task.delete({
            where: {
                id: params.id++
            }
        })
    
        return NextResponse.json(data)

    } catch (error) {
        return NextResponse.json({message: "Tarea no encontrada"})
    }
}