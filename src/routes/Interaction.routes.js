import {Router} from 'express'
import { createInteraction, createInteractionSheets, deleteInteraction, getInteraction, getInteractions, getInteractionsSheets, updateInteraction } from '../controllers/Interaction.controller.js'

const router = Router()
// Sheets
router.get("/sheets", getInteractionsSheets)
router.post("/sheets", createInteractionSheets)

// CRM
router.get("/", getInteractions)
router.get("/:id", getInteraction)
router.post("/", createInteraction)
router.put("/", updateInteraction)
router.delete("/", deleteInteraction)

export default router