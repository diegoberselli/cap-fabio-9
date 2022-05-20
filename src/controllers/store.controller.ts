import CreateStoreService from "../services/store/createStore.service";
import { Request, Response } from "express";
import IndexStoreService from "../services/store/indexStore.service";
import UpdateStoreService from "../services/store/updateStore.service";
import listStoreService from "../services/store/listStore.service";
import deleteStoreService from "../services/store/deleteStore.service";

export default class StoreController {
  static store = async (request: Request, response: Response) => {
    const { branch, city, street, district, number, zipCode, phone } =
      request.body;
    const store = await CreateStoreService.execute({
      branch,
      city,
      street,
      district,
      number,
      zipCode,
      phone,
    });
    return response.status(201).json(store);
  };

  static list = async (request: Request, response: Response) => {
    const stores = await listStoreService.execute();
    return response.send(stores);
  };

  static index = async (request: Request, response: Response) => {
    const { id } = request.params;
    const store = await IndexStoreService.execute({ id });
    return response.status(200).json(store);
  };

  static update = async (request: Request, response: Response) => {
    const { branch, city, street, district, number, zipCode, phone } =
      request.body;
    const { id } = request.params;
    const updatedStore = await UpdateStoreService.execute({
      id,
      branch,
      city,
      street,
      district,
      number,
      zipCode,
      phone,
    });
    return response.status(200).json(updatedStore);
  };

  static delete = async (request: Request, response: Response) => {
    const { id } = request.params;

    const deletedStore = await deleteStoreService.execute({ id });

    return response.status(200).json({ message: "Store deleted with sucess!" });
  };
}
