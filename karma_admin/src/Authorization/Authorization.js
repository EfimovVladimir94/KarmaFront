import React, { useState } from 'react';
import './Authorization.css';

const Authorization = ({ onLogin }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            login: login,
            password: password
        };

        try {
            const response = await fetch('http://localhost:8080/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            console.log('response:', response);
            // Дополнительная обработка ответа, например, проверка статуса

            // Передача данных авторизации в родительский компонент
            onLogin();
        } catch (error) {
            console.log('Error:', error);
        }
    };

    return (
        <div className="login-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Форма авторизации</h2>
                <label htmlFor="username" className="form-label">Имя пользователя</label>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                </div>
                <label htmlFor="password" className="form-label">Пароль</label>
                <div className="mb-3">
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Войти</button>
            </form>
        </div>
    );
};

export default Authorization;