// react
import {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../redux/categoriesRedux';
import shortid from 'shortid';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { useForm } from 'react-hook-form';

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
    const [dateError, setDateError] = useState(false);
    const [contentError, setContentError] = useState(false);
    const [category, setCategory] = useState(props.category || '');
    const [categoryError, setCategoryError] = useState(false);

    const handleSubmit = () => {
        setContentError(!content);
        setDateError(!publishedDate);
        if(content && publishedDate) {
            action({ title, author, publishedDate, shortDescription, content, category });
        }
      };

    const { register, handleSubmit: validate, formState: { errors } } = useForm();

    const categories = useSelector(getAllCategories)

    return (
        <Form onSubmit={validate(handleSubmit)}>
            <Form.Group className="mb-3 w-50" controlId="postTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control 
                    {...register("title", { required: true, minLength: 3 })}
                    value={title} 
                    onChange={e => setTitle(e.target.value)} 
                    type="text" 
                    placeholder="Enter title" 
                />
                {errors.title && <small className="d-block form-text text-danger mt-2">This field is required and must have at least 3 characters</small>}
            </Form.Group>
            <Form.Group className="mb-3 w-50" controlId="postAuthor">
                <Form.Label>Author</Form.Label>
                <Form.Control 
                    {...register("author", { required: true, minLength: 3 })}
                    value={author} 
                    onChange={e => setAuthor(e.target.value)} 
                    type="text" 
                    placeholder="Enter author" 
                />
                {errors.author && <small className="d-block form-text text-danger mt-2">This field is required and must have at least 3 characters</small>}
            </Form.Group>
            <Form.Group>
            <Form.Label>Category</Form.Label>
                <Form.Select id="categorySelect" onChange={(e) => setCategory(e.target.value)} value={category} aria-label='Select category'>
                    {categories.map(category => <option key={shortid()} value={category} >{category}</option>)}
                </Form.Select>
                {categoryError && <small className="d-block form-text text-danger mt-2">Please choose category</small>}  
            </Form.Group>
            <Form.Group className="mb-3 w-50" controlId="postDate">
                <Form.Label>Date</Form.Label>
                <DatePicker 
                    selected={publishedDate}
                    onChange={(date) => setPublishedDate(date)} 
                    type="date" 
                    placeholder="Enter date"
                />
                {dateError && <small className="d-block form-text text-danger mt-2">Date can't be empty</small>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="postDescritpion">
                <Form.Label>Short description</Form.Label>
                <Form.Control 
                    {...register("des", { required: true, minLength: 20 })}
                    value={shortDescription} 
                    onChange={e => setShortDescription(e.target.value)} as="textarea" 
                    rows={3} 
                    placeholder="Write short description"
                />
                {errors.des && <small className="d-block form-text text-danger mt-2">This field is required</small>}
            </Form.Group>
            <Form.Group className="mb-4" controlId="postContent">
                <Form.Label value={content}>Main content</Form.Label>             
                <ReactQuill
                    theme="snow"   
                    value={content} 
                    onChange={setContent}
                    placeholder="Type here" 
                />
                {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
            </Form.Group>
            <Button as="input" type="submit" value={actionText} />
        </Form>
    )
}

export default PostForm