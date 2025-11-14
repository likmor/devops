import { Button, Container, Form, FormControl } from "react-bootstrap";
import { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import useData from "../components/useData";
import useDispatch from "../components/useDispatch";

const confirmPasswordField = "confirmPassword";
const passwordField = "password";
const emailField = "email";

function Lab04Add() {
  const [isSending, setSending] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const items = useData();
  const dispatch = useDispatch();
  // React Hook Form setup
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const profile = items.find((p) => p.id === parseInt(id));
    if (profile) {
      Object.keys(profile).forEach((key) => {
        setValue(key, profile[key]);
      });
    }
  }, [id, items, setValue]);

  const onSubmit = (data) => {
    setSending(true);
    dispatch({ type: "edit", profile: { ...data, id: parseInt(id) } });
    setSending(false);
    navigate('/lab03')
  };

  return (
    <div>
      <h1>Edit</h1>

      <Container>
        <Form className="text-primary" onSubmit={handleSubmit(onSubmit)}>
          <FormControl type="hidden" {...register("id")} />

          <Form.Group className="mb-3">
            <Form.Label htmlFor="name">Name</Form.Label>
            <FormControl
              minLength={2}
              maxLength={25}
              required
              id="name"
              type="text"
              placeholder="Enter name"
              {...register("name", { required: true, minLength: 2 })}
            />
            {errors.name && (
              <Form.Text className="text-danger">
                Name must be at least 2 characters long
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="phone">Phone</Form.Label>
            <FormControl
              minLength={8}
              maxLength={11}
              required
              id="phone"
              type="text"
              placeholder="Enter phone"
              {...register("phone", { required: true, minLength: 8 })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor={emailField}>Email address</Form.Label>
            <FormControl
              minLength={4}
              maxLength={100}
              required
              id={emailField}
              type="email"
              placeholder="Enter email"
              {...register(emailField, {
                required: true,
              })}
            />
            {errors[emailField] && (
              <Form.Text className="text-danger">Invalid email</Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="url">Url</Form.Label>
            <FormControl
              minLength={6}
              maxLength={100}
              id="url"
              type="text"
              placeholder="Enter URL"
              {...register("url", { required: false })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="birthDate">Birth date</Form.Label>
            <FormControl
              required
              id="birthDate"
              type="date"
              {...register("birthDate", { required: true })}
            />
          </Form.Group>

          <div className="d-grid">
            <Button
              disabled={isSending}
              type="submit"
              variant="outline-primary"
              size="lg"
            >
              Save Changes
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default Lab04Add;
