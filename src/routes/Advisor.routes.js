import {Router} from 'express'
import { getAdvisors, getAdvisor, createAdvisor, updateAdvisor, deleteAdvisor } from '../controllers/Advisor.controller.js';

const router = Router()

router.get("/", getAdvisors)
router.get("/:id", getAdvisor)
router.post("/", createAdvisor)
router.put("/:id", updateAdvisor)
router.delete("/:id", deleteAdvisor)

export default router