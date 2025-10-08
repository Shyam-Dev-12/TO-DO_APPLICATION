import React, {useState, useEffect } from 'react'
import { useGetTodosQuery, useGetTodoQuery, useUpdateTodoMutation } from '../Slices/todoApiSlice.jsx'
import { data, Navigate, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

 const UpdateTodo = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");
  
  const {id} = useParams(); 
  console.log(id);

  const {data: todo} = useGetTodoQuery(id)
  console.log(todo);
  
  const { refetch } = useGetTodosQuery()

  const navigate = useNavigate();

  const [updateTodo] = useUpdateTodoMutation();

    const handleSubmit = async (e) => {
      e.preventDefault()
        await updateTodo ({ id, title, description, status }).unwrap();
        refetch();
        navigate('/todolist');
        toast.success("Todo updated successfully!");
    }

    useEffect(() => {
      if (todo) {
        setTitle(todo.title);
        setDescription(todo.description);
        setStatus(todo.status);
      }
    }, [todo]);

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-200 p-4'>
      <div className='w-full max-w-lg bg-white rounded-lg  shadow-lg p-8'>
        <h2 className='text-2xl font-bold text-black text-center my-4'>UpdateTodo</h2>
      
      <form  onSubmit={handleSubmit} className='space-y-6'>
        <div>
            <label htmlFor="title"
            className='block text-sm font-medium text-gray-600'>
                Title
            </label>
            <input 
                value={title}
                onChange={(e) => setTitle(e.target.value)}  
                type="text" 
                id='title'
                placeholder='Enter Your Title '
                className='mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm 
                           focus:outline:name focus:border:blue-500'/>
        </div>

        <div>
            <label htmlFor="description"
            className='block text-sm font-medium text-gray-600'>
                Description
            </label>
            
            <textarea 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                id='description'
                placeholder='Enter Your Description' 
                className='mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm 
                           focus:outline:name focus:border:blue-500'>
            </textarea>
            
        </div>

        <div className='my-2'>
                <label className="block text-sm font-medium text-gray-600">
                  Status
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-100"
                >
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
                </select>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg shadow-md
                     hover:bg-blue-600 transition duration-200 mt-3">
          Update Todo
        </button>

      </form>
    </div>

    </div>
  )
}

export default UpdateTodo
