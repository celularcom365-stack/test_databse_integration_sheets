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

// Sheets

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

export const createContactSheets = async (req, res) => {
    const data = req.body;

    const prospectId = await prisma.prospect.findFirst({
            where: {
                identification: data["identification"]
            },
            select: {
                id_prospect: true
            }
        });

        if (!prospectId) {
            return res.status(404).json({ "message": "Prospect not found" });
        }

        data["prospectId"] = prospectId.id_prospect;
    
    try {
        try{
            const data = req.body;
            const newContact = await prisma.contact.create({
                data: {
                    phone: data["selectedContactId"],
                    ownerId: parseInt(data["prospectId"]),
                    ownerType: "CLIENTE",
                    updatedAt: new Date()
                }
            });
            res.status(201).json(newContact);
        }
        catch(error){
            console.error(error.message);
            res.status(500).json({ error: "Internal server error" });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal server error" });
    }

}

export const getContactsXProspect = async (req, res) => {
    
    try{
        const data = req.body

        const contacts = await prisma.prospect.findMany({
            where:{
                identification: data.prospectId.toString()
            },
            select:{
                identification: true,
                prospectContacts:{
                    select:{
                        id_contact: true,
                        phone: true
                    }
                }
            }
        })

        res.json(contacts);
    }catch(error){
        console.error(error.message);
        res.status(500).json({ error: "Internal server error" });
    }

}

export const setMainContact = async (req, res) => {
    const data = req.body;
    
    try {
        const updatedContact = await prisma.contact.updateMany({
            where: {
                id_contact: parseInt(data["selectedContactId"])
            },
            data: {
                main: true
            }
        });
        res.json(updatedContact);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}