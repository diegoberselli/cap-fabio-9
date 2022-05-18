import { AppError } from "../errors/AppError";
import { Request, Response, NextFunction } from "express";

export const handleError = (
  err: Error,
  req: Request,
  res: Response,
  _: NextFunction
) => {
  if (err instanceof AppError) {
    return res
      .status(err.statusCode)
      .json({ status: "Error", message: err.message });
  }

  return res
    .status(500)
    .json({ status: "Error", message: "Internal server error!" });
};
