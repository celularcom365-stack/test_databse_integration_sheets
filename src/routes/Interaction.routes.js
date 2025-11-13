import {Router} from 'express'

const router = Router()

router.get("/", getInteractions)
router.get("/:id", getInteraction)
router.post("/", creatInteraction)
router.put("/", updateInteraction)
router.delete("/", deleteInteraction)

export default router