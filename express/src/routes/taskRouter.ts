import { Router } from "express";
import tasksController from "../controllers/tasksController";
import storeValidation from "../middleware/storeTaskValidation";
import allTasksValidation from "../middleware/allTaskValidation";

const router = Router();

router.post("/", storeValidation, tasksController.store);
router.put("/:id", storeValidation, tasksController.update);
router.get("/", allTasksValidation, tasksController.index);
router.get("/:id", tasksController.show);

export default router;
