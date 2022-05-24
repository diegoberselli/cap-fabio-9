import {Request, Response} from 'express';
import CreateProductService from '../services/products/createProduct.service';
import DeleteProductService from '../services/products/deleteProduct.service';
import IndexProductService from '../services/products/indexProduct.service';
import ListProductsService from '../services/products/listProducts.service';
import UpdateProductService from '../services/products/updateProduct.service';



 
export default class ProductController {
    static store = async(request: Request, response: Response) => {
        const{ name, description, price, category, img_URL } = request.body;

        const product = await CreateProductService.execute({category, description, name, price, img_URL});

        return response.status(201).json(product);

    }
 
    static list = async(request: Request, response: Response) => {
        const products = await ListProductsService.execute();

        return response.json(products);

    }
 
    static index = async(request: Request, response: Response) => {
        const { id } = request.params;

        const product = await IndexProductService.execute({id});

        return response.json(product);

    }
 
    static update = async(request: Request, response: Response) => {
        const { name, price, description, category, img_URL } = request.body;
        const { id } = request.params;

        const updatedProduct = await UpdateProductService.execute({id, name, price, description, category, img_URL});

        return response.json(updatedProduct);
    }
 
    static delete = async(request: Request, response: Response) => {
        const { id } = request.params;

        await DeleteProductService.execute({id});

        return response.status(204).json();
    }
 
};