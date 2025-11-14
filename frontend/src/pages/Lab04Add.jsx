import { Button, Container, Form, FormControl } from "react-bootstrap";
import { useState } from "react";
import useData from "../components/useData";
import useDispatch from "../components/useDispatch";
import { useNavigate } from "react-router";

const confirmPasswordField = "confirmPassword";
const passwordField = "password";
const emailField = "email";

function Lab04Add() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]); // stan kominikatów błędów
  const [isSendig, setSending] = useState(false); // stan sygnalizujący wysyłanie

  const context = useData();
  const dispatch = useDispatch();

  const onSubmitFunction = async (e) => {
    e.preventDefault(); //blokada wysyłania żądania
    console.log("Submiting...");
    const data = new FormData(e.target);
    let name = data.get("name");
    let email = data.get("email");
    let phone = data.get("phone");
    let url = data.get("url");
    let birthDate = data.get("birthDate");
    //przykład walidacji programowej
    //kolejne warunki powinny dodawać do stanu errors własne komunikaty
    if (data.get(confirmPasswordField) !== data.get(passwordField)) {
      setErrors([...errors, "Password and confirmed password do not match!"]);
      return;
    }
    //stan blokujący przycisk submit na czas wysyłania danych
    setSending(true);
    await new Promise((resolve) => setTimeout(resolve, 100)); //symulacja wysyłania
    //odblokowanie przycisku submit
    setSending(false);
    for (let key of data.keys()) {
      //reset formularza
      e.target[key].value = "";
    }
    //kod wysłania akcji do funkcji redukującej
    dispatch({ type: "add", profile: { name, email, phone, url, birthDate } });

    navigate("/lab03");
  };

  return (
    <div>
      <h1>Register</h1>

      <div className="text-danger">
        {errors.map((e, i) => (
          <p key={i}>{e}</p>
        ))}
      </div>

      <Form className="text-primary" onSubmit={onSubmitFunction}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="name">Name</Form.Label>
          <FormControl
            minLength={2}
            maxLength={25}
            required
            id={"name"}
            type={"text"}
            name={"name"}
            className="text-lg"
            placeholder="Enter name"
          />
          <Form.Text className="text-muted">Input name</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="phone">Phone</Form.Label>
          <FormControl
            minLength={8}
            maxLength={11}
            required
            id={"phone"}
            type={"text"}
            name={"phone"}
            className="text-lg"
            placeholder="Enter phone"
          />
          <Form.Text className="text-muted">Input phone</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="email">Email address</Form.Label>
          <FormControl
            minLength={4}
            maxLength={100}
            required
            id={emailField}
            type={emailField}
            name={emailField}
            className="text-lg"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">Input valid email</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="url">Url</Form.Label>
          <FormControl
            minLength={6}
            maxLength={100}
            required
            id={"url"}
            type={"text"}
            name={"url"}
            className="text-lg"
            placeholder="Enter url"
          />
          <Form.Text className="text-muted">Input url</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor={"birthDate"}>Birth date</Form.Label>
          <FormControl
            required
            id={"birthDate"}
            type={"date"}
            name={"birthDate"}
            placeholder="Enter birhday"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor={passwordField}>Password</Form.Label>
          <FormControl
            required
            id={passwordField}
            type={passwordField}
            minLength={2}
            name={passwordField}
            placeholder="Enter your password"
          />
          <Form.Text className="text-muted">
            Input mininum 2 characters
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="confirmPassword">Confirm password</Form.Label>
          <FormControl
            required
            id={confirmPasswordField}
            type={passwordField}
            name={confirmPasswordField}
            minLength={2}
            placeholder="Re-enter your password"
          />
          <Form.Text className="text-muted">
            Confirm your password, it should be the same as above!
          </Form.Text>
        </Form.Group>

        <div className="d-grid">
          <Button
            disabled={isSendig}
            type="submit"
            variant="outline-primary"
            size="lg"
          >
            Register
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Lab04Add;
