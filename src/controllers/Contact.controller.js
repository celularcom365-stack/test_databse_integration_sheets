import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getContacts = async (req, res) => {
    try {
        const clientContacts = await prisma.clientContact.findMany();
        res.json(clientContacts);
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}
export const getContact = async (req, res) => {
}
export const createContact = async (req, res) => {
    try{
        const { phone, ownerId, ownerType} = req.body;
        const newContact = await prisma.contact.create({
            data: {
                phone: phone,
                ownerId: parseInt(ownerId),
                ownerType
            }
        });
        res.status(201).json(newContact);
    }
    catch(error){
        console.error(error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}
export const updateContact = async (req, res) => {
}
export const deleteContact = async (req, res) => {
}



export const createCont = async (phone, ownerId, ownerType) => {
    try{
        const newContact = await prisma.contact.create({
            data: {
                phone: phone,
                ownerId: parseInt(ownerId),
                ownerType
            }
        });
        res.status(201).json(newContact);
    }
    catch(error){
        console.error(error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}