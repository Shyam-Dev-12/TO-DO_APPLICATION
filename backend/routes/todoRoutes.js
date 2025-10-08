import express from "express"
import {
  getTodos,
  getTodo,
  addTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todoControllers.js"
import { protect } from "../middleware/authmiddlewares.js"

const TodoRouter = express.Router()

// app.get("/api/todo", getTodos)

// app.post("/api/todo", addTodo)

TodoRouter.route("/")
  .get(protect, getTodos)
  .post(protect, addTodo)

// UserRoutes.route("/api/user/").get(getUser).post(addUser)

// app.patch("/api/todo/update/:id", updateTodo)
// app.delete("api/todo/delete/:id", deleteTodo)

TodoRouter.route("/:id")
  .get(getTodo)
  .patch(updateTodo)
  .delete(deleteTodo)

export default TodoRouter
