import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';
import CreatePost from './pages/CreatePost';

function App() {
    return (
        <Router>
            <Navbar />

            <Routes>
                <Route path='/' exact element={<MainPage />} />
                <Route path='/create-post' element={<CreatePost />} />
            </Routes>
        </Router>
    );
}

export default App;
