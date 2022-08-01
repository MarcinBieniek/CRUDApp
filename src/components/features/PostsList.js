//react-gear
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../redux/postsRedux';
import Row from 'react-bootstrap/Row';
//components
import PostHeader from './PostHeader';

const PostsList = () => {

    const posts = useSelector(state => getAllPosts(state));

    return (
        <Row xs={1} md={3} className="justify-content-space-between">
            {posts.map(post => <PostHeader key={post.id} {...post} />)}          
        </Row>
    );
};

export default PostsList

