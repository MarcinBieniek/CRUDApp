//react-gear
//components
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddPost = () => {
    return (
        
        <Row className="d-flex align-items-center justify-content-center">
            <div className="w-75">             
                <h1 className="mb-4">Add Post</h1>
                <Form>
                    <Form.Group className="mb-3 w-50" controlId="postTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter title" />
                    </Form.Group>
                    <Form.Group className="mb-3 w-50" controlId="postAuthor">
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text" placeholder="Enter author" />
                    </Form.Group>
                    <Form.Group className="mb-3 w-50" controlId="postDate">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" placeholder="Enter date" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="postDescritpion">
                        <Form.Label>Short description</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Write short description"/>
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="postContent">
                        <Form.Label>Main content</Form.Label>
                        <Form.Control as="textarea" rows={6} placeholder="Write post"/>
                    </Form.Group>
                    <Button >Add Post</Button>
                </Form>
            </div>
        </Row>


    );
};

export default AddPost;