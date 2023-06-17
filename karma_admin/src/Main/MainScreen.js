import React from 'react';

const MainScreen = ({ onLogout }) => {
    const handleLogout = () => {
        // Обработчик выхода из системы
        onLogout();
    };

    return (
        <div>
            <h1>Welcome to the Logged In Screen</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default MainScreen;