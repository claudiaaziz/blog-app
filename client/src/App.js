import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';
import CreateBlogPost from './pages/CreateBlogPost';

function App() {
    return (
        <Router>
            <Navbar />

            <Routes>
                <Route path='/' exact element={<MainPage />} />
                <Route path='/create-post' element={<CreateBlogPost />} />
            </Routes>
        </Router>
    );
}

export default App;
