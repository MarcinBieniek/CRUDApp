//react-gear
import { Link, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getPostById, deletePost } from '../../redux/postsRedux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

//components
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const SinglePost = () => {

    const dispatch = useDispatch();
    const { postId } = useParams();
    const postData = useSelector(state => getPostById(state, postId))

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    
    const handleDelete = e => {
        e.preventDefault();
        dispatch(deletePost(postId))
    }

    if(!postData) return <Navigate to="/" />
    else return (
        <>
            <Row className="d-flex align-items-center justify-content-center">
                <div className="w-75">
                    <div className="d-flex justify-content-between mb-4">
                        <h1>{postData.title}</h1>
                        <div>
                            <Link to={"/post/edit"}>    
                                <Button variant="outline-info">Edit</Button>
                            </Link>
                            <Button variant="outline-danger" className="ms-2" onClick={handleShow}>Delete</Button>
                        </div>  
                    </div>
                    <Card className="border-0">
                        <Card.Text className={"m-0"}><span className={"fw-bold"}>Author:</span>{' '+ postData.author}</Card.Text>
                        <Card.Text ><span className={"fw-bold"}>Published:</span>{' '+ postData.publishedDate}</Card.Text>
                        <Card.Text >{postData.content}</Card.Text>
                    </Card>
                </div>
            </Row>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>This operation will completely remove this post. </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Remove
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default SinglePost;