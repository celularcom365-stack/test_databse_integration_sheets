import { Router } from "express";
import { createProspect, deleteProspect, listProspect, listProspectAdvisorSheets, listProspects, listProspectsAdvisorSheets, listProspectsInfoSheets, listProspectsSheets, updateProspect, updateProspectSheets } from "../controllers/Prospect.controller.js";

const router = Router();

// CRM

router.get("/", listProspects);
router.get("/:id", listProspect);
router.post("/", createProspect);
router.put("/", updateProspect);
router.delete("/", deleteProspect);

export default router;