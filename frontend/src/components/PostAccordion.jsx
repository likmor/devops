import { Accordion } from "react-bootstrap";

export function PostAccordion({ name, body }) {
  return (
    <Accordion>
      <Accordion.Item style={{ backgroundColor: "transparent" }} eventKey="0">
        <Accordion.Header>{name}</Accordion.Header>
        <Accordion.Body>{body}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
