import { Router } from "express";
import userController from "../controllers/user-controller.js";

const router = new Router();

router.get("/api/users", userController.getUsers);
router.get("/api/user/:id", userController.getUser);
router.post("/api/user", userController.addUser);
router.post("/api/user/image", userController.uploadUserPicture);
router.put("/api/user/:id", userController.updateUser);
router.delete("/api/user/:id", userController.deleteUser);

export default router;
