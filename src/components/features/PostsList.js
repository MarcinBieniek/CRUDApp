import PostHeader from './PostHeader';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../redux/postsRedux';
import Row from 'react-bootstrap/Row';

const PostsList = () => {

    const posts = useSelector(state => getAllPosts(state));

    return (
        <Container>
            <Row className="d-flex justify-content-between gap-4">
                {posts.map(post => <PostHeader key={post.id} {...post} />)}          
            </Row>
        </Container>
    );
};

export default PostsList

