import {Router} from "express"
import { createClientType, deleteClientType, getClientType, getClientTypes, updateClientType } from "../controllers/ClientType.controller.js"

const router = Router()

router.get("/", getClientTypes)
router.get("/:id", getClientType)
router.post("/", createClientType)
router.put("/:id", updateClientType)
router.delete("/:id", deleteClientType)

export default router