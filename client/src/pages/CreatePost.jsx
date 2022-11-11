import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { CreatePost } from "../services/post";
import Form from "react-bootstrap/Form";
import { useMutation, useQueryClient } from "react-query";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function NewPost() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutateAsync, isSuccess } = useMutation(CreatePost);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      content: "",
      title: "",
    },
  });
  const onSubmit = async (data) => {
    await mutateAsync(data);
  };
  useEffect(() => {
    if (isSuccess) {
      queryClient.invalidateQueries("posts");
      navigate("/");
    }
  }, [isSuccess, navigate, queryClient]);
  return (
    <Form className="w-50 mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-center mb-5">New post</h1>
      <Form.Group as={Col} controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Controller
          render={({ field }) => (
            <Form.Control type="text" placeholder="Title" {...field} />
          )}
          name="title"
          control={control}
        />
      </Form.Group>
      <Form.Group as={Col} controlId="formBasicPassword">
        <Form.Label>Content</Form.Label>
        <Controller
          render={({ field }) => (
            <Form.Control as="textarea" rows={3} {...field} />
          )}
          name="content"
          control={control}
        />
      </Form.Group>
      <Button className="mt-3" variant="success" type="submit">
        Envoyer
      </Button>
    </Form>
  );
}
