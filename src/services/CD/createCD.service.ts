import { AppDataSource } from "../../data-source";
import { Cd } from "../../entities/Cd.entity";
import { AppError } from "../../errors/AppError";
import { IProductCdCreate } from "../../interfaces/CD";

export default class CreateCDService {
  static execute = async ({ branch, city, street, district, number, zipcode, phone }: IProductCdCreate) => {
    const cdRepository = AppDataSource.getRepository(Cd);

    const cdAlreadyExists = await cdRepository.findOne({
      where: { phone },
    });

    if (cdAlreadyExists) {
      throw new AppError(
        409,
        "This CD already exists"
      );
    }

    const cd = new Cd();
    cd.branch = branch;
    cd.city = city;
    cd.street = street;
    cd.district = district;
    cd.number = number;
    cd.zipcode = zipcode;
    cd.phone = phone;

    cdRepository.create(cd);
    await cdRepository.save(cd);

        return cd;
    }
}

