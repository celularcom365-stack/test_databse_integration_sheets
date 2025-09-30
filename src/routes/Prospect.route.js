import { Router } from "express";
import { createProspect, deleteProspect, listProspect, listProspects, updateProspect } from "../controllers/Prospect.controller.js";

const router = Router();

router.get("/", listProspect);

router.get("/", listProspects);

router.post("/", updateProspect);

router.put("/", deleteProspect);

router.delete("/", createProspect);

export default router;