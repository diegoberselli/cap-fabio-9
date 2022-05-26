import {Request, Response} from 'express';
import CreateCDService from '../services/CD/createCD.service';
import DeleteCDService from '../services/CD/deleteCD.service';
import IndexCDService from '../services/CD/indexCD.service';
import ListCDService from '../services/CD/listCD.service';
import UpdateCDService from '../services/CD/updateCD.service';
 
export default class CDController {
    static store = async(request: Request, response: Response) => {
        const {branch, city, street, district, number, zipcode, phone} = request.body;
        
        const cdProduct = await CreateCDService.execute({branch, city, street, district, number, zipcode, phone});

        return response.status(201).json(cdProduct);
    }
 
    static list = async(request: Request, response: Response) => {
        const cdProducts = await ListCDService.execute();

        return response.json(cdProducts);
    }
 
    static index = async(request: Request, response: Response) => {
        const {id} = request.params;

        const cdProduct = await IndexCDService.execute({id});

        return response.json(cdProduct);
    }
 
    static update = async(request: Request, response: Response) => {
        const {id} = request.params;
        const {branch, city, street, district, number, zipcode, phone} = request.body;

        const updatedCDProduct = await UpdateCDService.execute({id, branch, city, street, district, number, zipcode, phone});

        return response.json(updatedCDProduct);
    }
 
    static delete = async(request: Request, response: Response) => {
        const {id} = request.params;

        const deletedCDProduct = await DeleteCDService.execute({id});

        return response.status(204).json();
    }
 
};