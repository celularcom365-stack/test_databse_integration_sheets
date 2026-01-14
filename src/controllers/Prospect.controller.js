import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const listProspects = async (req, res) => {
    // const { name, email, phone } = req.body;
    const users = await prisma.prospect.findMany({
        select: {
            name: true,
            identification: true,
            source: true,
            observation: true,
            type: {
                select: {
                    name: true
                }
            },
            _count: {
                select: { prospectContacts: true }
            }
        }
    })
    res.json(users);
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
        const data = req.body.data

        for (const item of data) {
            try{
                const prospect = await prisma.prospect.create({
                    data: {
                        identification: item["Telefono"] || "NaN",
                        name: item["Nombre"],
                        source: item["Tipo de venta"],
                        observation: item["Comentario"],
                        typeId: 3
                    }
                });
                
                // Create associated contact
                await prisma.contact.create({
                    data: {
                        phone: item["Telefono"],
                        ownerId: prospect.id_prospect,
                        ownerType: "Advisor"
                    }
                });
                
            }catch(error){
                continue;
            }
        }
        res.status(201).json({ message: "Prospects and contacts created successfully" });
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

// Sheets

export const listProspectsSheets = async (req, res) => {
    const users = await prisma.prospect.findMany({
        select: {
            name: true,
            identification: true,
            source: true,
            observation: true,
            type: {
                select: {
                    name: true
                }
            },
            advisor:{
                select:{
                    name:true
                }
            },
            _count: {
                select: {
                    prospectContacts: true,
                    interactions: true
                }
            }
        }
    })
    res.json(users);
}

export const listProspectsAdvisorSheets = async (req, res) => {
    const { advisorId } = req.params;
    const users = await prisma.prospect.findMany({
        where: {
            advisorId: parseInt(advisorId),
        },
        select: {
            name: true,
            identification: true,
            source: true,
            observation: true,
            createdAt: true,
            type: {
                select: {
                    name: true
                }
            },
            _count: {
                select: {
                    prospectContacts: true
                }
            },
            prospectContacts: {
                select: {
                    phone: true,
                    description: true
                }
            }
        }
    })
    res.json(users);
}

export const listProspectAdvisorSheets = async (req, res) => {
    const { prospectId, advisorId } = req.body[0];
    const users = await prisma.prospect.findFirst({
        where: {
            identification: prospectId.toString(),
            advisorId: advisorId
        },
        select: {
            source: true,
            observation: true,
            type: {
                select: {
                    name: true
                }
            },
            prospectContacts: {
                select: {
                    phone: true,
                    description: true
                }
            }
        }
    })
    res.json(users);
}

export const updateProspectSheets = async (req, res) => {
    try {
        const data = req.body;
        const updatedProspect = await prisma.prospect.update({
            where: { identification: (data[0].prospect).toString() },
            data: { 
                advisorId: parseInt(data[0].advisor),
                assignedAt: new Date()
            },
            select: {
                name: true,
                advisor:{
                    select:{
                        name:true
                    }
                }
            }
        });
        res.json(updatedProspect);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const listProspectsInfoSheets = async (req, res) => {
    var identification = (req.body[0].prospect).toString();
    if(identification.length==12 || identification.length==9){
        identification = "0"+identification;
    }
    const prospectInfo = await prisma.prospect.findFirst({
        where: {
            identification: identification
        },
        select: {
            advisorId: true,
            id_prospect: true,
            name: true,
            advisor:{
                select:{
                    name:true
                }
            },
            source: true,
            type: {
                select: {
                    name: true
                }
            }
        }
    })
    var interaction = 0
    var state = "Sin gestion"
    if(prospectInfo.advisorId!=null){
        interaction = await prisma.interaction.count({
            where: {
                prospectId: prospectInfo.id_prospect,
                advisorId: prospectInfo.advisorId
            }
        })
    }
    if(interaction>0){
        state = "En gestion"
    }
    var result = {...prospectInfo, state:state };
    res.json(result);
}