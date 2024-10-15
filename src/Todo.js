import Cancel from "./Cancel";

export default function Todo({ todo, setTodos }) {
    return (
        <div className="flex gap-5">
            <div className=" text-sm bg-sky-200 text-gray-600 m-1 p-2 rounded-lg w-48">
                {todo.text}
            </div>
            <div className=" ml-2">
               <Cancel id={todo.id} setTodos={setTodos} />
            </div>
        </div>
    )
}