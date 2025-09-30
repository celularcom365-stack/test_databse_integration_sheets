import {PrismaClient} from "@prisma/client"

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

export const getClientTypeById = async (req, res) => {

}

export const createClientType = async (req, res) => {
    try {
        const {name, description} = req.body
        const newClientType = await prisma.clientType.create({
            data: {
                name,
                description
            }
        })
        res.status(201).json(newClientType) 
    }
    catch (error) {
        res.status(500).json({error: "Internal Server Error"})
    }
}

export const updateClientType = async (req, res) => {

}

export const deleteClientType = async (req, res) => { 

}