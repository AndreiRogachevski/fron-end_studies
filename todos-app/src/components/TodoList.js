import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectTodo, getTodoListAsync } from '../store/todoSlice';
import { Link } from 'react-router-dom';
import { deleteTodoItem } from '../store/todoAPI';


export const TodoList = () => {

    const items = useSelector(selectTodo);
    const dispatch = useDispatch();


    const handleDelete = async(id) => {
        deleteTodoItem(id);
        dispatch(getTodoListAsync());
    }

    useEffect(() => {
        dispatch(getTodoListAsync());
    }, [dispatch])


    return (
        <>
        <Link to={ '/add' }>add item</Link>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Text</th>
                    <th>Status</th>
                    <th colspan="3">Actions</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                { items.map(item => <tr key={ item.id }>
                    <td>{ item.id}</td>
                    <td>{ item.text }</td>
                    <td>{ item.completed ? 'completed' : 'uncompleted' }</td>
                    <td><Link to={ `/${item.id}` }>change item</Link></td>
                    <td><button onClick={ () => handleDelete( item.id ) }>delete item</button></td>
                </tr>) }
            </tbody>
        </table>
        </>
    )

}