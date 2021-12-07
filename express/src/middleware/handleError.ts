import { Request, Response, NextFunction } from "express";

export function handleErros(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof Error) {
    console.log(err.message);
    return res.status(400).send({
      error: err.message,
    });
  }
  return res.status(500).send({
    error: "Internal Server Error",
  });
}
