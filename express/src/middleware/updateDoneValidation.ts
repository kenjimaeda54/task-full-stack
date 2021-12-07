import { Request, Response, NextFunction } from "express";

export default function updateDoneValidation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (typeof req.body.done === "undefined") {
    return res.status(400).send({
      error: "The done field is required",
    });
  }
  return next();
}
