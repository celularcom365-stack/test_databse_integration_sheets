import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const getAdvisors = async(req, res) => {
    try {
        const advisors = await prisma.advisor.findMany({where: { visible: true }})
        res.json(advisors)
    }catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}
export const getAdvisor = async(req, res) => {
    try {
        const { id } = req.params;
        const advisor = await prisma.advisor.findFirst({
            where: { 
                identification: id,
                visible: true
            }
        })
        if (advisor) {
            res.json(advisor)
        } else {
            res.status(404).json({ error: "Advisor not found" })
        }
    }catch (error) {
        res.status(500).json({ "message": error.message })
    }
}

export const createAdvisor = async(req, res) => {
    try {
        const {identification, name, lastName, birthDate, gender } = req.body;
        const newAdvisor = await prisma.advisor.create({
            data: {
                identification,
                name,
                lastName,
                birthDate: new Date(birthDate),
                gender,
                createdAt: new Date(),
                updatedAt: new Date(),
                visible: true
            }
        })
        res.status(201).json(newAdvisor)
    }catch (error) {
        res.status(500).json({ "message": error.message } )
    }
}



export const updateAdvisor = async(req, res) => {
    try{
        const { id } = req.params;
        const { name, lastName, birthDate, gender } = req.body;
        const updatedAdvisor = await prisma.advisor.update({
            where: { identification: id },
            data: {
                name,
                lastName,
                birthDate: new Date(birthDate),
                gender,
                updatedAt: new Date()
            }
        })
        res.json(updatedAdvisor)
    }catch (error) {
        res.status(500).json({ "message": error.message } )
    }
}

export const deleteAdvisor = async(req, res) => {
    try{
        const { id } = req.params;
        await prisma.advisor.update({
            where: { identification: id },
            data: {
                visible: false,
                updatedAt: new Date()
            }
        })
        res.status(204).send();
    }catch (error) {
        res.status(500).json({ "message": error.message } )
    }
}
