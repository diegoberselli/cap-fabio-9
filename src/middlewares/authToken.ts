import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";
import jwt from "jsonwebtoken";

const authToken = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new AppError(401, "Pending authorization token");
  }

  const headerData = authorization.split(" ");
  const [, token] = headerData;

  jwt.verify(token, process.env.SECRET_KEY as string, (error, decoded: any) => {
    if (error) {
      throw new AppError(406, "Token invalid");
    }

    req.branchLoggedIn = decoded.branch;

    next();
  });
};

export default authToken;
