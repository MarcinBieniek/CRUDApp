//react-gear
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getPostById } from '../../redux/postsRedux';

//components
import ButtonEditPost from '../common/ButtonEditPost';
import ButtonDeletePost from '../common/ButtonDeletePost';

const SinglePost = () => {

    const { postId } = useParams();
    const postData = useSelector(state => getPostById(state, postId))

    return (
        <Row className="d-flex align-items-center justify-content-center">
            <div className="w-50">
                <div className="d-flex justify-content-between mb-4">
                    <h1>{postData.title}</h1>
                    <div>
                        <Link to={"/post/edit"}>    
                            <ButtonEditPost >Edit</ButtonEditPost>
                        </Link>
                        <Link to={"/post/delete"}>
                            <ButtonDeletePost >Delete</ButtonDeletePost>
                        </Link>  
                    </div>  
                </div>
                <Card className="border-0">
                    <Card.Text className={"m-0"}><span className={"fw-bold"}>Author:</span>{' '+ postData.author}</Card.Text>
                    <Card.Text ><span className={"fw-bold"}>Published:</span>{' '+ postData.publishedDate}</Card.Text>
                    <Card.Text >{postData.content}</Card.Text>
                </Card>
            </div>
        </Row>

    );
};

export default SinglePost;