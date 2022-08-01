//react-gear
import PostsList from "../features/PostsList";
import { Link } from 'react-router-dom';

//components
import Button from 'react-bootstrap/Button';

const Home = () => {
    return (
        <div>
            <div className='d-flex justify-content-between mb-2'>
                <h1>All posts</h1>
                <Link to={"/post/add"}>    
                    <Button variant="outline-primary">Add Post</Button>
                </Link>    
            </div>
            <PostsList />
        </div>
    );
};

export default Home;