import { Request, Response } from "express";
import CreateStorageStoreProductService from "../services/storageStoreProducts/createStorageStoreProducts.service";


export default class StorageStoreProductController{
    static store = async (request: Request, response: Response) => {
        const {storage_quantity} = request.body;

        const storage = await CreateStorageStoreProductService.execute({
            storage_quantity,
        })
        return response.status(201).json(storage)
    }
}