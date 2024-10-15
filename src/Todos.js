import { useEffect, useState } from "react"
import LogoutBtn from "./LogoutBtn"
import { BACKEND_URL } from "./constants";
import Todo from "./Todo";

function Todos() {
    const [todos, setTodos]= useState([]);
    const [text, setText] = useState("");

    useEffect(() => {
        fetch(`${BACKEND_URL}/todos`).then((response) => response.json())
        .then((data) => {
            setTodos(data.todo);
            console.log(data.todo);
        })
        .catch((error) => console.log(error));
    }, [])

    const handleInput = (e) => {
        setText(e.target.value)
    }

    const handleAddTodo = () => {
        if (text.length > 0) {
            fetch(`${BACKEND_URL}/todos/create`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ text: `${text}` })
            }).then((response) => response.json())
            .then((data) => {
                setTodos(data.todo);
                setText("")
                console.log(data.todo);
            })
            .catch((error) => console.log(error));
        }
    }

    return (
        <div className="">
            <LogoutBtn />
            <div className="flex justify-center mt-24">
                <div className="flex justify-between">
                    <div className=" w-full ">
                        <input type="text" onChange={handleInput}
                        className="px-2 py-1 border m-4 rounded-sm focus:border-lime-500 outline-none"
                        placeholder="Add Todo..."
                        value={text}
                        />
                    </div>
                    <div>
                        <button className=" rounded-lg m-4 p-1 px-2 text-white bg-green-600" onClick={handleAddTodo}>Add</button>
                    </div>
                </div>
            </div>
            <div className=" flex flex-col items-center max-h-72 overflow-y-auto">
                    {todos && todos.map((todo) => {
                        return <div className="flex flex-col">
                            <Todo key={todo.id} todo={todo} setTodos={setTodos}/>
                        </div>
                    })} 
            </div>

        </div>
    )
}

export default Todos