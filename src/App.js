import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import NoMatchPage from './components/NoMatchPage/NoMatchPage';
import Account from './components/Account/Account';
import { useState } from 'react';

function App() {
    const [username, setUsername] = useState("");
    const [history, setHistory] = useState(false);
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Login username={username} setUsername={setUsername} />} />
                <Route path='/savedaccount/:username' element={<Login username={username} setUsername={setUsername} setHistory={setHistory} />} />
                <Route path='/account/*' element={<Account username={username} setUsername={setUsername} history={history} />} />
                <Route path="*" element={<NoMatchPage />} />
            </Routes>
        </div>
    );
}

export default App;
