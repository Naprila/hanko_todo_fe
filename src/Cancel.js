import { BACKEND_URL } from "./constants";

export default function Cancel({ id, setTodos}) {


    const deleteTodo = (todoId) => {
        fetch(`${BACKEND_URL}/todos/delete`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ todoId: `${id}` })
        }).then((response) => response.json())
        .then((data) => {
            setTodos(data.todo);
            console.log(data.todo);
        })
        .catch((error) => console.log(error));
    }

    return (
        <button className=" text-white text-md bg-red-500 rounded-full p-2 m-1 hover:bg-red-600"
        onClick={deleteTodo}>
            X 
        </button>
    )   
}