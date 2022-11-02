import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTodoList /*deleteTodoItem, addTodoItem, changeTodoItem*/ } from "./todoAPI";

const initialState = { items: [], status: 'idle', };

export const getTodoListAsync = createAsyncThunk(
    'todo/getTodoList',
    async() => {
        const response = await getTodoList();
        const data = await response.json();
        return data;
    }
)
// export const deleteTodoItemAsync = createAsyncThunk(
//     'todo/deleteTodoItem',
//     async(id) => await deleteTodoItem(id)
// )

// export const addTodoItemAsync = createAsyncThunk(
//     'todo/addTodoItem',
//     async(text, completed) => await addTodoItem(text, completed)
// )

// export const changeTodoItemAsync = createAsyncThunk(
//     'todo/updateTodoItem',
//     async(text, completed) => await changeTodoItem(text, completed)
// )

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTodoListAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getTodoListAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.items = action.payload;
            })
            // .addCase(addTodoItemAsync.pending, (state) => {
            //     state.status = 'loading';
            // })
            // .addCase(addTodoItemAsync.fulfilled, (state, action) => {
            //     state.status = 'idle';
            //     state.items = [...state.items, action.payload];
            // })
            // .addCase(deleteTodoItemAsync.pending, (state) => {
            //     state.status = 'loading';
            // })
            // .addCase(deleteTodoItemAsync.fulfilled, (state, action) => {
            //     state.status = 'idle';
            //     state.items = state.items.filter(item => item.id !== action.payload.id);
            // })
            // .addCase(changeTodoItemAsync.pending, (state) => {
            //     state.status = 'loading';
            // })
            // .addCase(changeTodoItemAsync.fulfilled, (state, action) => {
            //     state.status = 'idle';
            //     state.items = state.items.map(item => {
            //         if (item.id === action.payload.id) {
            //             item.text = action.payload.text;
            //             item.completed = action.payload.completed;
            //         }
            //         return item;
            //     });
            // })
    }
})

export const selectTodo = (state) => state.todo.items;

export default todoSlice.reducer;