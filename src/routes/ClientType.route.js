import {Router} from "express"
import { createClientType, getClientTypes } from "../controllers/ClientType.controller.js"

const router = Router()

router.get("/", getClientTypes)

router.get("/:id", getClientTypes)

router.post("/", createClientType)

router.put("/", getClientTypes)

router.delete("/", getClientTypes)

export default router