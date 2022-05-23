import { AppDataSource } from "../../data-source";
import { Product } from "../../entities/product.entity";
import { AppError } from "../../errors/AppError";
import { IProductCreate } from "../../interfaces/products";

export default class CreateProductService {

    static execute = async({name, description, price, category}: IProductCreate) => {
        const productRepository = AppDataSource.getRepository(Product);
        console.log("service", productRepository)
        
        const productAlreadyExists = await productRepository.findOne({where:{name}});
        
        if(productAlreadyExists){
            throw new AppError(409, 'Product already Exists');
        }

        const product = new Product();
        product.name = name;
        product.price = price;
        product.description = description;
        product.category =  category;

        productRepository.create(product);
        await productRepository.save(product);

        return product;

    }
}