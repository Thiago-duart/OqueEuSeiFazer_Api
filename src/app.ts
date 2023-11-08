import express, { Application } from "express";
import "reflect-metadata";
import "express-async-errors";
import "dotenv/config";

const app: Application = express();
app.use(express.json());

export default app;
