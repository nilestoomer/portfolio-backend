import db from "../db/connection.js"
import Project from "../models/Project.js"
import projectsData from "./projects.json" assert { type: "json" }
import chalk from "chalk"

const insertData = async () => {

    await db.dropDatabase()

    await Project.create(projectsData)

    console.log(chalk.cyanBright("stuff has created"))

    await db.close()
}

insertData()