// react
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editPost } from '../../redux/postsRedux';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getPostById } from '../../redux/postsRedux';
import { Navigate } from 'react-router-dom';

// components
import PostForm from './PostForm';

const EditPostForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { id } = useParams();

    const handleSubmit = post => {
        dispatch(editPost({ ...post, id }));
        navigate('/')
    };

    const actionText = "Edit post";

    const postData = useSelector(state => getPostById(state, id))

    if(!postData) return <Navigate to="/" />
    else return (
        <PostForm 
            action={handleSubmit} 
            actionText={actionText}
            title={postData.title}
            author={postData.author}
            publieshedDate={postData.publieshedDate}
            shortDescription={postData.shortDescription}
            content={postData.content}
        />
    )
}

export default EditPostForm