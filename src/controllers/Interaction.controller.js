import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getInteractions = async (req, res) => {
    try {
        const interactions = await prisma.interaction.findMany({ where: { visible: true } });
        res.json(interactions);
    } catch (error) {
        res.status(500).json({ "message": error.message });
    }
}

export const getInteraction = async (req, res) => {
    try {
        const { id } = req.params;
        const interaction = await prisma.interaction.findFirst({
            where: {
                id: id,
                visible: true
            }
        });
        if (interaction) {
            res.json(interaction);
        } else {
            res.status(404).json({ error: "Interaction not found" });
        }
    } catch (error) {
        res.status(500).json({ "message": error.message });
    }
}

export const createInteraction = async (req, res) => {
    try {
        const { advisorId, prospectId, nextAction, observation, result } = req.body;
        const newInteraction = await prisma.interaction.create({
            data: {
                advisorId,
                prospectId,
                nextAction: new Date(nextAction),
                observation,
                result,
                createdAt: new Date(),
                updatedAt: new Date(),
                visible: true
            }
        });
        res.status(201).json(newInteraction);
    } catch (error) {
        res.status(500).json({ "message": error.message });
    }
}

export const updateInteraction = async (req, res) => {
    try {
        const { id } = req.params;
        const { advisorId, clientId, interactionDate, notes } = req.body;
        const updatedInteraction = await prisma.interaction.update({
            where: { id: id },
            data: {
                advisorId,
                clientId,
                interactionDate: new Date(interactionDate),
                notes,
                updatedAt: new Date()
            }
        });
        res.json(updatedInteraction);
    } catch (error) {
        res.status(500).json({ "message": error.message });
    }
}

export const deleteInteraction = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedInteraction = await prisma.interaction.update({
            where: { id: id },
            data: {
                visible: false,
                updatedAt: new Date()
            }
        });
        res.json(deletedInteraction);
    } catch (error) {
        res.status(500).json({ "message": error.message });
    }
}

// Sheets
export const createInteractionSheets = async (req, res) => {
    try {
        const items = req.body;

        const newInteraction = await prisma.interaction.create({
            data: {
                advisorId : parseInt(items["advisorId"]),
                prospectId: parseInt(items["prospectId"]),
                nextAction: items["nextInteraction"] || null,
                observation: items["observation"] || null,
                clientTone: items["tone"] || null,
                duration: items["duration"] || null,
                result: items["result"],
                callState: items["callState"] || null,
                channel: items["channel"] || null,
                createdAt: new Date(),
                updatedAt: new Date(),
                visible: true
            }
        });
        return res.json(newInteraction);
    } catch (error) {
        return res.json({ "message": error.message });
    }    
}

export const getInteractionsSheets = async (req, res) => {
    try {
        const interactions = await prisma.interaction.findMany({ where: { visible: true } });
        res.json(interactions);
    } catch (error) {
        res.status(500).json({ "message": error.message });
    }
}