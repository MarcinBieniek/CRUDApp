import ButtonRead from "../common/ButtonRead";
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const PostHeader = props => {

    return (
        <Col className="square border rounded py-4">
            <h4>{props.title}</h4>
            <p className={"m-0"}><span className={"fw-bold"}>Author:</span>{' ' + props.author}</p>
            <p><span className={"fw-bold"}>Published:</span>{' ' + props.publishedDate}</p>
            <p>{props.shortDescription}</p>
            <Link to={"/post/" + props.key}>
                <ButtonRead className="rounded">
                    Read More
                </ButtonRead>
            </Link>
        </Col>
    );
};

export default PostHeader
