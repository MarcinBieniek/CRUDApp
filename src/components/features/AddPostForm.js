//react-gear
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { addPost } from '../../redux/postsRedux';
import { useNavigate } from "react-router-dom";

//components
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddPostForm = () => {

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishedDate, setPublishedDate] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addPost({ title, author, publishedDate, shortDescription, content }));
        navigate('/');
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 w-50" controlId="postTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Enter title" />
            </Form.Group>
            <Form.Group className="mb-3 w-50" controlId="postAuthor">
                <Form.Label>Author</Form.Label>
                <Form.Control value={author} onChange={e => setAuthor(e.target.value)} type="text" placeholder="Enter author" />
            </Form.Group>
            <Form.Group className="mb-3 w-50" controlId="postDate">
                <Form.Label>Date</Form.Label>
                <Form.Control value={publishedDate} onChange={e => setPublishedDate(e.target.value)} type="date" placeholder="Enter date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="postDescritpion">
                <Form.Label>Short description</Form.Label>
                <Form.Control value={shortDescription} onChange={e => setShortDescription(e.target.value)}as="textarea" rows={3} placeholder="Write short description"/>
            </Form.Group>
            <Form.Group className="mb-4" controlId="postContent">
                <Form.Label>Main content</Form.Label>
                <Form.Control value={content} onChange={e => setContent(e.target.value)} as="textarea" rows={6} placeholder="Write post"/>
            </Form.Group>
            <Button as="input" type="submit" value="Add Post" />
        </Form>
    )
}

export default AddPostForm