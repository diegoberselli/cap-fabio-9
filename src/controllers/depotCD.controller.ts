import { Request, Response } from "express";
import AddProductService from "../services/depotCD/addProduct.service";
import DeleteDepotCDProductService from "../services/depotCD/deleteProductDepotCD.service";
import IndexDepotCDProductService from "../services/depotCD/indexDepotCDProduct.service";
import ListDepotCDService from "../services/depotCD/listDepotCD.service";
import UpdateDepotCdProductService from "../services/depotCD/updateDepotCDProduct.service";

export default class DepotCDController {
  
    static store = async(request: Request, response: Response) => {
        const {product_id, cd_id, quantity} = request.body;

        const cdProduct = await AddProductService.execute({product_id, cd_id, quantity});

        return response.status(201).json(cdProduct);

    }
 
    static list = async(request: Request, response: Response) => {
        const cdProducts = await ListDepotCDService.execute();

        return response.json(cdProducts);
    }
 
    static index = async(request: Request, response: Response) => {
        const {id} = request.params;

        const cdProduct = await IndexDepotCDProductService.execute({id});

        return response.json(cdProduct);
    }
 
    static update = async(request: Request, response: Response) => {
        const {id} = request.params;
        const{ product_id, cd_id, quantity} = request.body;

        const updatedCDProduct = await UpdateDepotCdProductService.execute({id, product_id, cd_id, quantity});

        return response.json(updatedCDProduct);
    }
 
    static delete = async(request: Request, response: Response) => {
        const {id} = request.params;
        const deletedCDProduct = await DeleteDepotCDProductService.execute({id});

        return response.status(204).json();

    }
 
};

