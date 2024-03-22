import Project from "../models/Project.js";

export const getProjects = async (request, response) => {
    try {
        const projects = await Project.find();
        response.json(projects)
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: error.message });
    }
};

export const getProject = async (request, response) => {
    try {
        const { id } = request.params;
        const project = await Project.findById(id);

        if (project) {
            return response.json(project);
        }

        response.status(404).json({ message: "Project not found "});
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: error.message });
    }
};

export const createProject = async (request, response) => {
    const project = new Project(request.body);
    await project.save();
    response.status(201).json(project);
};

export const updateProject = async (request, response) => {
    try {
        const { id } = request.params;
        const project = await Project.findByIdAndUpdate(id, request.body)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

export const deleteProject = async (request, response) => {
    try {
        const { id } = request.params;
        const deleted = await Project.findByIdAndDelete(id);

        if (deleted) {
            return response.status(200).send("Project deleted!");
        }

        throw new Error("Project not found!");
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
      }
};