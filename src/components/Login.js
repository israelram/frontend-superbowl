import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // aqui se hace la llamada al backend para verificar si el usuario existe
    // y se redirecciona a la seccion de estadisticas o de trivia dependiendo del resultado
    if (email === "user@example.com" && password === "password") {
        navigate.push('/statistics');
        } else {
        navigate.push('/trivia');
        }
        }
        
        return (
        <form onSubmit={handleSubmit}>
        <label>
        Email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
        </form>
        );
        }
        
        export default Login;
