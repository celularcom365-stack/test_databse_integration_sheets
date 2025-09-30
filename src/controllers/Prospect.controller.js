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
    // const { name, email, phone } = req.body;
    const newUser = await prisma.prospect.findMany()
    console.log("User Readed", newUser);
    res.json(newUser);
}

export const deleteProspect = async (req, res) => {
    // const { name, email, phone } = req.body;
    const newUser = await prisma.prospect.findMany()
    console.log("User Readed", newUser);
    res.json(newUser);
}

export const createProspect = async (req, res) => {
    const { name, email, phone } = req.body;
    const newUser = await prisma.prospect.findMany()
    console.log("User Readed", newUser);
    res.json(newUser);
}

export const getData = (req, res) => {
  res.send("Database route is working!");
}