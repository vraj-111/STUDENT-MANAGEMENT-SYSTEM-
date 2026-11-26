import express from "express";
import studentController from "../controller/student.controller.js";

const router = express.Router();

router.post("/add", studentController.add);
router.get("/getAll", studentController.getAll);
router.get("/getById/:id", studentController.getById);
router.put("/updateById/:id", studentController.updateManually);
router.delete("/deleteStudent/:id", studentController.deleteStudent);
router.delete("/deleteAllData", studentController.deleteAllData);

export default router;