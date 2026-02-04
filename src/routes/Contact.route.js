import {Router} from "express"
import { createContact, deleteContact, getContact, getContacts, updateContact, getContactsXProspect, setMainContact, createContactSheets } from "../controllers/Contact.controller.js"

const router = Router()

// Sheets
router.post("/sheets/new", createContactSheets)
router.post("/sheets/info", getContactsXProspect)
router.put("/sheets/info", setMainContact)

// CRM

router.get("/", getContacts)
router.get("/:id", getContact)
router.post("/", createContact)
router.put("/", updateContact)
router.delete("/", deleteContact)

export default router