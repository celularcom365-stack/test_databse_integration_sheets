import {Router} from "express"
import { createContact, deleteContact, getContact, getContacts, updateContact } from "../controllers/Contact.controller.js"

const router = Router()

router.get("/", getContacts)
router.get("/:id", getContact)
router.post("/", createContact)
router.put("/", updateContact)
router.delete("/", deleteContact)

export default router