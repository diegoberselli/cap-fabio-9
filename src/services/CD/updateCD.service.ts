import { AppDataSource } from "../../data-source";
import { Cd } from "../../entities/Cd.entity";
import { AppError } from "../../errors/AppError";
import { IProductCd } from "../../interfaces/CD";

export default class UpdateCDService {
  static execute = async ({ id, branch, city, street, district, number, zipcode, phone }: IProductCd) => {
    const cdRepository = AppDataSource.getRepository(Cd);
    const cd = await cdRepository.findOne({ where: { id: id } });

    if (!cd) {
      throw new AppError(404, "Not found any product with this Id");
    }

    branch ? (cd.branch = branch) : cd.branch;
    city ? (cd.city = city) : cd.city;
    street ? (cd.street = street) : cd.street;
    district ? (cd.district = district) : cd.district;
    number ? (cd.number = number) : cd.number;
    zipcode ? (cd.zipcode = zipcode) : cd.zipcode;
    phone ? (cd.phone = phone) : cd.phone;

    await cdRepository.save(cd);

    return cd;
  };
}
