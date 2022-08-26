import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import AuthLayout from './layout/AuthLayout';
import Board from './pages/Board';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Signup from './pages/Signup';
import DocumentLayout from './layout/DocumentLayout';
import ButtonPage from './pages/docs/ButtonPage';
import TextFieldPage from './pages/docs/TextFieldPage';
import './App.scss';
import OTPInputPage from './pages/docs/OTPInputPage';
import SelectPage from './pages/docs/SelectPage/SelectPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AuthLayout />}>
                    <Route path="auth/login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                </Route>
                <Route path="/" element={<DocumentLayout />}>
                    <Route path="/docs/button" element={<ButtonPage />} />
                    <Route path="/docs/textfield" element={<TextFieldPage />} />
                    <Route path="/docs/otpinput" element={<OTPInputPage />} />
                    <Route path="/docs/select" element={<SelectPage />} />
                </Route>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<Home />} />
                    <Route path="boards" element={<Board />} />
                    <Route path="boards/:boardId" element={<Board />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
