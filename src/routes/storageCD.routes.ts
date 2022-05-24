import { Router } from "express";
import StorageCDController from "../controllers/storageCD.controler";

const router = Router();

export const storageCDRouter = () => {

    
    router.post('/', StorageCDController.store);
    router.get('/', StorageCDController.list);
    router.get('/:id', StorageCDController.index);
    router.patch('/:id', StorageCDController.update);
    router.delete('/:id', StorageCDController.delete);

    return router;

}