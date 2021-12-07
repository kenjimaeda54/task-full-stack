import { Router } from "express";
import tasksController from "../../controllers/tasks/tasksController";

const router = Router();

router.post("/", tasksController.store);

export default router;
