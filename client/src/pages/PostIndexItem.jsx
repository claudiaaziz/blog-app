import { useNavigate } from 'react-router-dom';

const PostIndexItem = ({ post }) => {
    const navigate = useNavigate();
    const { username, title, body } = post;
    const formattedBody = body.length > 500 ? body.slice(0, 500) + '...' : body;

    return (
        <div
            className='post-index-item'
            onClick={() => navigate(`post/${post.id}`)}
        >
            <h2>{title}</h2>
            <p>{formattedBody}</p>
            <span>{username}</span>
        </div>
    );
};

export default PostIndexItem;
