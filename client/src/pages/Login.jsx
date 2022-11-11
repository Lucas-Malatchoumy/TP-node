import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { login } from "../services/user";
import Form from "react-bootstrap/Form";
import { useMutation } from "react-query";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function NewUser() {
  const navigate = useNavigate();
  const { mutateAsync, isSuccess } = useMutation(login);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (data) => {
    await mutateAsync(data);
  };
  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess, navigate]);
  return (
    <Form className="w-50 mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-center my-5">Login</h1>
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
      <div className="d-flex flex-column">
        <Button className="mt-3" variant="success" type="submit">
          Log in
        </Button>
        <Button
          className="mt-3"
          variant="primary"
          onClick={() => navigate("/register")}
        >
          You don't have account ? Sign up !
        </Button>
      </div>
    </Form>
  );
}
