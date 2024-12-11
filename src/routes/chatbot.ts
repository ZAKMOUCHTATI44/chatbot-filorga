
import express from "express";
import { chatbot } from "../services/chatbotService";
const router = express.Router();

router.post("/chatbot-start", chatbot);


export default router;