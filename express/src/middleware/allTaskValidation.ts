import { Request, Response, NextFunction } from "express";

export default function allTaskValidation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.body.macaddress) {
    return res.status(400).json({
      error: "Field macaddress is required",
    });
  }
  return next();
}
