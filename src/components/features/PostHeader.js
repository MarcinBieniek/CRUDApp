//react-gear
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

//components
import Button from 'react-bootstrap/Button';
import { dateToStr } from '../../utils/dateToStr';

const PostHeader = props => {

    return (
        <Col>
            <Card className="p-2 mt-3">
                <Card.Title>{props.title}</Card.Title>
                <Card.Text className={"m-0"}><span className={"fw-bold"}>Author:</span>{' ' + props.author}</Card.Text>
                <Card.Text><span className={"fw-bold"}>Published:</span> {dateToStr(props.publishedDate)}</Card.Text>
                <Card.Text>{props.shortDescription}</Card.Text>    

            <Link to={"/post/" + props.id}>
                <Button variant="primary">
                    Read More
                </Button>
            </Link>

            </Card>
        </Col>
    );
};

export default PostHeader
