import { Router } from "express";
import tasksController from "../controllers/tasksController";
import storeValidation from "../middleware/storeTaskValidation";
import updateDoneValidation from "../middleware/updateDoneValidation";

const router = Router();

//as rotas get nao podem ter body
router.post("/", storeValidation, tasksController.store);
router.put("/:id", storeValidation, tasksController.update);
//este campo tem que ser o mesmo nome que esta em req.params
router.get("/search/:macaddress", tasksController.index);
router.get("/:id", tasksController.show);
router.delete("/:id", tasksController.destroy);
router.put("/done/:id", updateDoneValidation, tasksController.updateDone);
router.get("/search/late/:macaddress", tasksController.lateTasks);
router.get("/search/today/:macaddress", tasksController.todayTasks);
router.get("/search/week/:macaddress", tasksController.weekTask);
router.get("/search/month/:macaddress", tasksController.monthTask);
router.get("/search/year/:macaddress", tasksController.yearTask);

export default router;
