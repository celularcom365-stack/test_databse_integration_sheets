import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const getClientTypes = async (req, res) => {
    try {
        const clientTypes = await prisma.clientType.findMany()
        res.json(clientTypes)
    }
    catch (error) {
        res.status(500).json({error: "Internal Server Error"})
    }
}

export const getClientType = async (req, res) => {

}

export const createClientType = async (req, res) => {
    try {
        const {name, description} = req.body
        const newClientType = await prisma.clientType.create({
            data: {
                name,
                description,
                createdAt: new Date(),
                updatedAt: new Date(),
                visible: true
            }
        })
        res.status(201).json(newClientType) 
    }
    catch (error) {
        console.error(error.message)
        res.status(500).json({error: "Internal Server Error"})
    }
}

export const updateClientType = async (req, res) => {
    try{
        const data = await req.body
        const newClientType = await prisma.clientType.update({
            where:{

            },
            data:{

            }
        })
    }catch(error){
        return res.josn.status(500)("Can't update clientType")
    }
}

export const deleteClientType = async (req, res) => { 

}