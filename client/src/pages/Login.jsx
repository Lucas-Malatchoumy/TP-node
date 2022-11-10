import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Login } from "../services/user";
import Form from "react-bootstrap/Form";
import { useQueryClient, useMutation } from "react-query";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function NewUser() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutateAsync, isSuccess } = useMutation(Login);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (data) => {
    await mutateAsync(data);
  };
  if (isSuccess) {
    queryClient.invalidateQueries("usersData");
    navigate("/");
  }
  return (
    <Form className="w-50 mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Controller
            render={({ field }) => (
              <Form.Control type="email" placeholder="Email" {...field} />
            )}
            name="email"
            control={control}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formBasicPassword">
          <Form.Label>Mot de passe</Form.Label>
          <Controller
            render={({ field }) => (
              <Form.Control
                type="password"
                placeholder="Mot de passe"
                {...field}
              />
            )}
            name="password"
            control={control}
          />
        </Form.Group>
      </Row>
      <Button className="mt-3" variant="success" type="submit">
        Envoyer
      </Button>
    </Form>
  );
}
