import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Response } from "express";

export const main = () => {
  const app = express();
  app.use(cookieParser());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(
    cors({
      origin: ["http://localhost:3000"],
      credentials: true,
    })
  );
  app.get("/api/healthz", (_, res: Response) => {
    res.status(200).json({
      message: "hello Tee",
    });
  });
  return app;
};
