import Todo from "../models/todoModel.js"
import asyncHandler from "../middleware/asyncHandler.js"

const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
}); 

const addTodo = asyncHandler(async (req, res) => {
  const { title, descr, status } = req.body;
  if (!title || !descr) {
    return res.status(400).json({
      message: "Title and description are required",
    });
  }

  const todo = await Todo.create ({
    title,
    descr,
    status: status || "pending",
    user: req.user._id, // Assuming user is set in the request
  });
  res.status(201).json(todo);
}); 

const getTodo =asyncHandler (async (req, res) => {
  const { id } = req.params
    const todo = await Todo.findById(id)
    if (!todo) {
      return res
        .status(404)
        .json({ message: "Todo not found" })
    }
    res.json(todo)
})

const updateTodo =asyncHandler (async (req, res) => {
  const { id } = req.params
  const { title, descr, status } = req.body
    const todo = await Todo.findByIdAndUpdate(id)
    console.log(todo)
    todo.title = title || todo.title
    todo.descr = descr || todo.descr
    todo.status = status || todo.status
    const updatedTodo = await todo.save()
    res.json(updatedTodo)
})

const deleteTodo = async (req, res) => {
  const { id } = req.params
  const todo = await Todo.findByIdAndDelete(id)
  res.json(`${todo} deleted successfully`)
}

export {
  getTodos,
  addTodo,
  getTodo,
  updateTodo,
  deleteTodo,
}
