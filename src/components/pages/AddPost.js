//components
import Row from 'react-bootstrap/Row';
import AddPostForm from '../features/AddPostForm';

const AddPost = () => {
    return (
        
        <Row className="d-flex align-items-center justify-content-center">
            <div className="w-75">             
                <h1 className="mb-4">Add Post</h1>
                <AddPostForm />
            </div>
        </Row>
    );
};

export default AddPost;