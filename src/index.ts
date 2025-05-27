import express, { Request, Response } from "express";
import cors from "cors";
import chatbotRoute from "./routes/chatbot";
const app = express();
app.use(express.json());
app.use(cors());
require("dotenv").config();

app.use("/api", chatbotRoute);

app.listen(7000, () => {
  console.log("App started in 4000 port");
});
