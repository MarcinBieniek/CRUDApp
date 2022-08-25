// react
import {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// components
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const PostForm = ({
    action,
    actionText, 
    ...props}
) => {

    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');

    const handleSubmit = e => {
        e.preventDefault();
        action({ title, author, publishedDate, shortDescription, content });
      };

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
                <ReactQuill
                    theme="snow"   
                    value={content} 
                    onChange={setContent}
                    placeholder="Type here" 
                />
            </Form.Group>
            <Button as="input" type="submit" value={actionText} />
        </Form>
    )
}

export default PostForm