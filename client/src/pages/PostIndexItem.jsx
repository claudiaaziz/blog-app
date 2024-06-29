import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

const PostIndexItem = ({ post }) => {
    const navigate = useNavigate();
    const { username, title, body, likes } = post;
    const formattedBody = body.length > 500 ? body.slice(0, 500) + '...' : body;

    const likePost = (e) => {
        e.stopPropagation();

        Axios.post('http://localhost:5010/api/likes', {
            postId: post.id,
        });
    };

    return (
        <div
            className='post-index-item'
            onClick={() => navigate(`post/${post.id}`)}
        >
            <div className='post-index-item-header'>
                <h2>{title}</h2>
                <div className='likes-div'>
                    <span>{likes}</span>
                    <button className='like-btn' onClick={(e) => likePost(e)}>
                        Like
                    </button>
                </div>
            </div>
            <p>{formattedBody}</p>
            <span>{username}</span>
        </div>
    );
};

export default PostIndexItem;
