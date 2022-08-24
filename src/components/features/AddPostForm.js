// react
import {useDispatch} from 'react-redux';
import { addPost } from '../../redux/postsRedux';
import { useNavigate } from "react-router-dom";

// components
import PostForm from './PostForm'

const AddPostForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = post => {
        dispatch(addPost(post));
        navigate('/');
    }
    
    const actionText = "Add post";

    return (
        <PostForm action={handleSubmit} actionText={actionText} />
    )
}

export default AddPostForm