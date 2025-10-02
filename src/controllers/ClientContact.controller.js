import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getClientContacts = async (req, res) => {
    try {
        const clientContacts = await prisma.clientContact.findMany();
        res.json(clientContacts);
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}
export const getClientContactById = async (req, res) => {
}
export const createClientContact = async (req, res) => {
    try{
        const { prospect, main, phone, name, identification = "", description = ""} = req.body;
        const newClientContact = await prisma.clientContact.create({
            data: {
                prospect: parseInt(prospect),
                main,
                phone: parseInt(phone),
                name,
                identification: BigInt(identification),
                description
            }
        });
        res.status(201).json(newClientContact);
    }
    catch(error){
        console.error(error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}
export const updateClientContact = async (req, res) => {
}
export const deleteClientContact = async (req, res) => {
}