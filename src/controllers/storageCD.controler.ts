import {Request, Response} from 'express';
 
export default class StorageCDController {
    static store = async(request: Request, response: Response) => {
        const {id_product, quantity} = request.body;
    
    }
 
    static list = async(request: Request, response: Response) => {}
 
    static index = async(request: Request, response: Response) => {}
 
    static update = async(request: Request, response: Response) => {}
 
    static delete = async(request: Request, response: Response) => {}
 
};