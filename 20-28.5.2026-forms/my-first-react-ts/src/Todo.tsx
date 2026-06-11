import { useState } from "react";

interface Todo {
    id: number;
    text: string;
}

export default function Todo() {
    const [input, setInput] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>([]);

    function addTodo() {
        if (input.trim() === "") {
            return;
        }

        const newTodo: Todo = {
            id: todos.length + 1,
            text: input
        };
        setTodos([...todos, newTodo]);

        setInput("");
    }
    let renderedTodos = todos.map((todo) => (
        <li key={todo.id}>
           {todo.text}
        </li>
    ));
    return (
    <div>

        <div>
            <input type="text" onChange={(e) => setInput(e.target.value)} />
            <button onClick={addTodo}>Add</button>
        </div>
            <ul>
                {renderedTodos}
            </ul>
        </div>
    );
}
