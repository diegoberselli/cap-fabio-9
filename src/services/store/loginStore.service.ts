import { AppDataSource } from "../../data-source";
import { Store } from "../../entities/store.entity";
import { AppError } from "../../errors/AppError";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export class LoginStoreService {
  static async execute(branch: string, password: string) {
    const storeRepository = AppDataSource.getRepository(Store);
    const store = await storeRepository.findOne({ where: { branch } });

    if (!store) {
      throw new AppError(400, "Branch or password invalid");
    }

    const checkPassworld = bcrypt.compareSync(password, store.password);

    if (!checkPassworld) {
      throw new AppError(400, "Branch or password invalid");
    }

    const token = jwt.sign(
      { branch: branch },
      process.env.SECRET_KEY as string,
      { expiresIn: "24h" }
    );

    return token;
  }
}
