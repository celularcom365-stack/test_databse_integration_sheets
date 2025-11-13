import {Router} from 'express'
import { createClientAddress, deleteClientAddress, getClienAddressById, getClientAddresses, updateClientAddress } from '../controllers/ClientAddress.controller.js';

const router = Router()

router.get("/", getAddresses)
router.get("/:id", getAddress)
router.post("/", creatAddress)
router.put("/", updateAddress)
router.delete("/", deleteAddress)

export default router
