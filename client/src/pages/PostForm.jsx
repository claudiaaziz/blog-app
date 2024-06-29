import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

const PostForm = () => {
    const navigate = useNavigate();
    
    const [username, setUsername] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const createPost = () => {
        Axios.post('http://localhost:5010/api/posts', {
            username,
            title,
            body,
        }).then(navigate('/'));
    };

    return (
        <div className='post-form' onSubmit={createPost}>
            <form>
                <label htmlFor='username'>Username:</label>
                <input
                    type='text'
                    id='username'
                    placeholder='Your username'
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor='title'>Title:</label>
                <input
                    type='text'
                    id='title'
                    placeholder='Title of your post'
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor='body'>Body:</label>
                <textarea
                    name=''
                    id='body'
                    placeholder='Your post content'
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <button>Create Post</button>
            </form>
        </div>
    );
};

export default PostForm;
