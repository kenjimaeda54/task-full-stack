import { Router } from "express";
import tasksController from "../controllers/tasksController";
import storeValidation from "../middleware/storeTaskValidation";

const router = Router();

router.post("/", storeValidation, tasksController.store);
router.put("/:id", storeValidation, tasksController.update);
router.get("/show", tasksController.show);

export default router;
