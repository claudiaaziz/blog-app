import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import PostsIndex from './pages/PostsIndex';
import PostForm from './pages/PostForm';
import Post from './pages/Post';

function App() {
    return (
        <Router>
            <Navbar />

            <Routes>
                <Route path='/' exact element={<PostsIndex />} />
                <Route path='/post-form' element={<PostForm />} />
                <Route path='/post/:id' element={<Post />} />
            </Routes>
        </Router>
    );
}

export default App;
