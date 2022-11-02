export const getTodoList = async () => fetch('http://localhost:3000/todos');
// {
//     const response = await fetch('http://localhost:3000/todos');
//     const data = await response.json();
//     return data;
// }

export const addTodoItem = async (text, completed) => {
    const option = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, completed }),
    };
    /*const response = await*/ fetch('http://localhost:3000/todos', option);
    // const data = await response.json();
}

export const deleteTodoItem = async (id) => {
    const option = { method: 'DELETE', };
    /*const response = await*/ fetch(`http://localhost:3000/todos/${id}`, option);
}

export const changeTodoItem = async (text, completed, id) => {
    const option = {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, completed }),
    };
    /*const response = await*/ fetch(`http://localhost:3000/todos/${id}`, option);
    // const data = await response.json();
}