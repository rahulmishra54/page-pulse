import { Router } from "express";
import { analyzeWebsite } from "../controllers/analyze.controller.js";

const router = Router();

router.post("/analyze", analyzeWebsite);

export default router;