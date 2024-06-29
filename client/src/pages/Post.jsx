import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

export default function Post() {
    const { id } = useParams();

    const [post, setPost] = useState(null);

    useEffect(() => {
        Axios.get(`http://localhost:5010/api/post/${id}`).then((data) =>
            setPost(data.data[0])
        );
    }, [id]);

    return (
        <div className='post'>
            <div>
                <h2>{post?.title}</h2>
                <p>{post?.body}</p>
            </div>
            <span>{post?.username}</span>
        </div>
    );
}
