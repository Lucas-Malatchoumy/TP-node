import { Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useQuery } from "react-query";
import { getPosts } from "../services/post";

export default function BasicExample() {
  const { error, data } = useQuery("posts", getPosts);
  const posts = data || [];
  if (error) {
    alert("heyyyyy");
  }
  return (
    <div>
      <h1 className="text-center">Recent posts</h1>
      <Row xs={1} md={3} className="g-4 mt-5 mx-auto">
        {posts.reverse().map((post) => {
          return (
            <Col className="d-flex justify-content-center" key={post._id}>
              <Card bg="dark" style={{ width: "18rem" }}>
                <Card.Header>{post.title}</Card.Header>
                <Card.Body>
                  <Card.Text>{post.content}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                  {new Date(post.created_at).toUTCString()}
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
