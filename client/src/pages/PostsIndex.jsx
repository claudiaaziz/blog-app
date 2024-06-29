import { useEffect, useState } from 'react';
import Axios from 'axios';
import PostIndexItem from './PostIndexItem';

const PostsIndex = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:5010/api/posts').then((data) =>
            setPosts(data.data)
        );
    }, []);

    return (
        <div className='posts-index'>
            {posts.map((post) => (
                <PostIndexItem key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostsIndex;
