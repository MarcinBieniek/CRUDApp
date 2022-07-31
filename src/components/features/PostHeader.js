import ButtonRead from "../common/ButtonRead";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const PostHeader = props => {

    return (
        <Col>
            <Card className="p-2">
                <Card.Title>{props.title}</Card.Title>
                <Card.Text className={"m-0"}><span className={"fw-bold"}>Author:</span>{' ' + props.author}</Card.Text>
                <Card.Text><span className={"fw-bold"}>Published:</span>{' ' + props.publishedDate}</Card.Text>
                <Card.Text>{props.shortDescription}</Card.Text>    

            <Link to={"/post/" + props.key}>
                <ButtonRead className="rounded">
                    Read More
                </ButtonRead>
            </Link>

            </Card>
        </Col>
    );
};

export default PostHeader
