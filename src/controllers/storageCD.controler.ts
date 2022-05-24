import {Request, Response} from 'express';
import CreateProductCDService from '../services/storageCD/createStorageCD.service';
import DeleteCDProductService from '../services/storageCD/deleteCDProduct.service';
import IndexCDProductService from '../services/storageCD/indexStorageCD.service';
import ListCDProductsService from '../services/storageCD/listStorageCD.service';
import UpdateCDProductService from '../services/storageCD/updateCDproductStorage.service';
 
export default class StorageCDController {
    static store = async(request: Request, response: Response) => {
        const {product_id, cd_quantity} = request.body;
        
        const cdProduct = await CreateProductCDService.execute({product_id, cd_quantity});

        return response.status(201).json(cdProduct);
    }
 
    static list = async(request: Request, response: Response) => {
        const cdProducts = await ListCDProductsService.execute();

        return response.json(cdProducts);
    }
 
    static index = async(request: Request, response: Response) => {
        const {id} = request.params;

        const cdProduct = await IndexCDProductService.execute({id});

        return response.json(cdProduct);
    }
 
    static update = async(request: Request, response: Response) => {
        const {id} = request.params;
        const {product_id, cd_quantity} = request.body;

        const updatedCDProduct = await UpdateCDProductService.execute({id, product_id, cd_quantity});

        return response.json(updatedCDProduct);
    }
 
    static delete = async(request: Request, response: Response) => {
        const {id} = request.params;

        const deletedCDProduct = await DeleteCDProductService.execute({id});

        return response.status(204).json();
    }
 
};