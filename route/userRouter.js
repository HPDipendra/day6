import express from "express"
import WorkController from "../controller/workController.js"


const router = express.Router();
const app = express();
app.use(express.json());
const workController = new WorkController(); //initialize controller

router.post("/add", workController.addWork);
router.get("/:id", workController.getById);
router.put("/:id", workController.update)
router.delete("/:id",workController.delete)
router.get('/search/by', workController.search)

export default router; 