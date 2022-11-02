import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const Form = ({ handler }) => {

    const [text, setText] = useState('');
    const [completed, setCompleted] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        handler(text, completed, id);
        navigate('/')
        // window.location.assign('/');        
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input type="text" onChange={ (e) => setText(e.target.value) } value={ text }/>
            <input type="checkbox" onChange={ (e) => setCompleted(e.target.checked) } checked={ completed }/>
            <button type="submit">submit</button>  
        </form>
    )
}