import {Router} from "express"
import { createClientContact, deleteClientContact, getClientContactById, getClientContacts, updateClientContact } from "../controllers/ClientContact.controller.js"

const router = Router()

router.get("/", getClientContacts)
router.get("/:id", getClientContactById)
router.post("/", createClientContact)
router.put("/", updateClientContact)
router.delete("/", deleteClientContact)

export default router