import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { getPosts } from "../services/post";

export default function BasicExample() {
  const navigate = useNavigate();
  const { error, data } = useQuery("posts", getPosts);
  const posts = data || [];
  if (error) {
    alert("heyyyyy");
  }
  const { mutateAsync, isLoading } = useMutation(() =>
    localStorage.removeItem("token")
  );

  const remove = async () => {
    await mutateAsync();
    navigate("/login");
  };
  return (
    <div>
      {posts.map((post) => {
        return (
          <Card border="primary" style={{ width: "18rem" }}>
            <Card.Header>{post.title}</Card.Header>
            <Card.Body>
              <Card.Text>{post.content}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
      <br />
      <Button
        disabled={isLoading}
        onClick={() => remove()}
        className="mx-2"
        variant="danger"
      >
        {"Supprimer"}
      </Button>
    </div>
  );
}
