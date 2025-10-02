import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const listProspects = async (req, res) => {
    // const { name, email, phone } = req.body;
    const newUser = await prisma.prospect.findMany()
    console.log("User Readed", newUser);
    res.json(newUser);
}

export const listProspect = async (req, res) => {
    // const { name, email, phone } = req.body;
    const newUser = await prisma.prospect.findMany()
    console.log("User Readed", newUser);
    res.json(newUser);
}

export const updateProspect = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, phone } = req.body;
        const updatedProspect = await prisma.prospect.update({
            where: { id: parseInt(id) },
            data: { name, email, phone }
        });
        res.json(updatedProspect);
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}

export const deleteProspect = async (req, res) => {
    // const { name, email, phone } = req.body;
    const newUser = await prisma.prospect.findMany()
    console.log("User Readed", newUser);
    res.json(newUser);
}

export const createProspect = async (req, res) => {
    try{
        const { identification, name, source, observation = "", clientTypeId } = req.body;
        const newProspect = await prisma.prospect.create({
            data: {
                identification: identification,
                name,
                source,
                observation,
                type: {
                    connect: { id_clientType: parseInt(clientTypeId, 13) }
                }
            }
        });
        res.status(201).json({"message": "ok"});
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const getData = (req, res) => {
  res.send("Database route is working!");
}