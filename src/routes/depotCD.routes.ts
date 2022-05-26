import { Router } from "express";
import DepotCDController from "../controllers/depotCD.controllers";

const router = Router();

export const depotCDRouter = () => {

    
    router.post('/', DepotCDController.store);
    router.get('/', DepotCDController.list);
    router.get('/:id', DepotCDController.index);
    router.patch('/:id', DepotCDController.update);
    router.delete('/:id', DepotCDController.delete);

    return router;

}