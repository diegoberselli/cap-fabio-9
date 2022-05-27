import { Router } from "express";
import CDController from "../controllers/CD.controller";


const router = Router();

export const CDRouter = () => {

    
    router.post('', CDController.store);
    router.get('', CDController.list);
    router.get('/:id', CDController.index);
    router.patch('/:id', CDController.update);
    router.delete('/:id', CDController.delete);

    return router;

}