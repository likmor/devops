import { Dropdown, DropdownButton } from "react-bootstrap";

export function TableDropdown({ name, action, dispatch }) {
  return (
    <DropdownButton title={name} id={name}>
      <Dropdown.Item onClick={() => dispatch({ type: action, sort: "asc" })}>
        Ascending order
      </Dropdown.Item>
      <Dropdown.Item onClick={() => dispatch({ type: action, sort: "desc" })}>
        Descending order
      </Dropdown.Item>
      <Dropdown.Item onClick={() => dispatch({ type: action, sort: "nat" })}>
        Natural order
      </Dropdown.Item>
    </DropdownButton>
  );
}
