import { useState } from 'react';
import { IoIosCheckbox } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";
import { toast } from 'react-toastify';
import { useGetTodosQuery, useDeleteTodoMutation } from '../Slices/todoApiSlice.jsx';

export const TodoList = () => {

  const {data: todos} = useGetTodosQuery();
  console.log(todos);

  const [deleteTodo] = useDeleteTodoMutation();

  const deleteHandler = async (id) => {
    await deleteTodo(id);
    toast.success("Todo deleted successfully!");

    // e.preventDefault();
    // try {
    //   await GetTodos( {id, title, description, status}).unwrap();  
    //     toast.success( "Todos fetched successfully!");
    //   } catch (error) {
    //     toast.error( error?.data?.message || "Failed to fetch todos");
    //   }
  }
    
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 text-center">
        Your Todos
      </h2>
      {todos?.length > 0 ? (    
        <div className="space-y-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {todos?.map((todo) => (
            <div
              key={todo._id}
              className={`bg-gray-50 p-4 rounded-lg shadow-md  border-gray-200 hover:shadow-2xl transition duration-300 ease-in-out ${
                todo.status === "completed" ? "bg-green-200" : "bg-red-200"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3
                  className={`text-xl font-bold ${
                    todo.status === "completed"
                      ? "text-gray-500 line-through"
                      : "text-gray-800"
                  }`}
                >
                  {todo.title}
                </h3>
                <p
                  className={`mt-2 ${
                    todo.status === "completed"
                      ? "text-gray-500 line-through"
                      : "text-gray-800"
                  }`}
                >
                  {todo.description}
                </p>
              </div>
              <div className="flex gap-1">
                {/* <button
                  className="p-2 bg-green-500 text-white rounded-full hover:bg-green-700 transition"
                  aria-label="Mark as Completed"
                >
                  <IoIosCheckbox />
                </button> */}
                <Link
                  to={`/update/${todo._id}`}
                  aria-label="Edit Todo"
                  className="p-2 bg-blue-500 text-white rounded-full hover:to-blue-600 transition"
                >
                  <CiEdit />
                </Link>
                <button
                  onClick={() => deleteHandler(todo._id)} 
                  className="p-2 bg-red-500 text-white rounded-full hover:bg-red-700 transition"
                  aria-label="Mark as Completed"
                >
                  <MdDelete />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">
          No todos available. Please add some tasks.
        </p>
      )}
    </div>
  );
}

export default TodoList

