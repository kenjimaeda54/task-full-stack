import { Router } from "express";
import tasksController from "../controllers/tasksController";
import storeValidation from "../middleware/storeTaskValidation";
import allTasksValidation from "../middleware/allTaskValidation";
import updateDoneValidation from "../middleware/updateDoneValidation";

const router = Router();

router.post("/", storeValidation, tasksController.store);
router.put("/:id", storeValidation, tasksController.update);
router.get("/", allTasksValidation, tasksController.index);
router.get("/:id", tasksController.show);
router.delete("/:id", tasksController.destroy);
router.put("/done/:id", updateDoneValidation, tasksController.updateDone);
router.get("/search/late", allTasksValidation, tasksController.lateTasks);
router.get("/search/today", allTasksValidation, tasksController.todayTasks);

export default router;
