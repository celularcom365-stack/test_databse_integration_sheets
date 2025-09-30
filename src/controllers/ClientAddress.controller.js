import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getClientAddresses = async(req, res) => {
    try {
        const clientAddresses = await prisma.clientAddress.findMany();
        res.json(clientAddresses);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
        console.error(error);
    }
}

export const getClienAddressById = async(req, res) => {
}

export const createClientAddress = async(req, res) => {
    try {
        const { street, city, state, zipCode, country, clientId } = req.body;
        const newClientAddress = await prisma.clientAddress.create({
            data: {
                street,
                city,
                state,
                zipCode,
                country,
                clientId
            }
        });
        res.status(201).json(newClientAddress);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
        console.error(error);
    }
}

export const updateClientAddress = async(req, res) => {
}

export const deleteClientAddress = async(req, res) => {
}
