import { Router }  from 'express';
import { createClientAddress, deleteClientAddress, getClienAddressById, getClientAddresses, updateClientAddress } from '../controllers/ClientAddress.controller.js';

const router = Router();

router.get("/", getClientAddresses)
router.get("/", getClienAddressById)
router.post("/",createClientAddress)
router.put("/",updateClientAddress)
router.delete("/",deleteClientAddress)

export default router;
