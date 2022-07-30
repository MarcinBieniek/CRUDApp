import PostsList from "../features/PostsList";
import ButtonAddPost from "../common/ButtonAddPost";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className='d-flex justify-content-between mb-4'>
                <h1>All posts</h1>
                <Link to={"/post/add"}>    
                    <ButtonAddPost>Add Post</ButtonAddPost>
                </Link>    
            </div>
            <PostsList></PostsList>
        </div>
    );
};

export default Home;