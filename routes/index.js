import { Router } from "express";
import projectsRoutes from "./projects.js"

const router = Router();

router.get("/", (request, response) => response.send("This is my portfolio api route!"));

router.use("/projects", projectsRoutes)

export default router;