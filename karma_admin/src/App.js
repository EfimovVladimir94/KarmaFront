import React, { useState } from 'react';
import Authorization from './Authorization/Authorization';
import MainScreen from './Main/MainScreen';

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        setLoggedIn(true);
    };

    const handleLogout = () => {
        setLoggedIn(false);
    };

    return (
        <div>
            {loggedIn ? (
                <MainScreen onLogout={handleLogout} />
            ) : (
                <Authorization onLogin={handleLogin} />
            )}
        </div>
    );
};

export default App;