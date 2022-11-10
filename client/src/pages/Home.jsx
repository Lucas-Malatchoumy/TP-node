import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

export default function BasicExample() {
  const navigate = useNavigate();
  const { mutateAsync, isLoading } = useMutation(() =>
    localStorage.removeItem("token")
  );

  const remove = async () => {
    await mutateAsync();
    navigate("/login");
  };
  return (
    <>
      <Card border="primary" style={{ width: "18rem" }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Primary Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Button
        disabled={isLoading}
        onClick={() => remove()}
        className="mx-2"
        variant="danger"
      >
        {"Supprimer"}
      </Button>
    </>
  );
}
